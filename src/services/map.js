import axios from "axios";

const getPriceData = async () => {
  const { data: priceData } = await axios.get(
    "https://open.er-api.com/v6/latest/SLL"
  );
  return priceData;
};

const getEESS = async () => {
  const {
    data: { ListaEESSPrecio },
  } = await axios.get(
    "https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/PostesMaritimos/"
  );
  return ListaEESSPrecio;
};

export const getData = async () => {
  const promises = [getPriceData(), getEESS()];
  const [priceData, prices] = await Promise.all(promises);
  const eurConversionRate = priceData.rates.EUR;

  const transformedPrices = [];
  prices.map((x) => {
    if (x["Precio Gasolina 95 E5"]) {
      const price = x["Precio Gasolina 95 E5"].replace(",", ".");
      transformedPrices.push({
        key: x["IDPosteMaritimo"],
        latLng: [
          x["Latitud"].replace(",", "."),
          x["Longitud (WGS84)"].replace(",", "."),
        ],
        priceEur: new Intl.NumberFormat("es-ES", {
          style: "currency",
          currency: "EUR",
        }).format(price),
        price: new Intl.NumberFormat("es-ES", {
          style: "currency",
          currency: "SLL",
        }).format(price / eurConversionRate),
      });
    }
  });
  return transformedPrices;
};
