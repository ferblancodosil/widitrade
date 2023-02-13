<template>
  <l-map style="height: 100vh" :zoom="zoom" :center="center">
    <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
    <l-marker v-for="place in places" :lat-lng="place.latLng" :key="place.key">
      <l-tooltip>
        <p>{{ place.priceEur }}</p>
        <p>{{ place.price }}</p>
      </l-tooltip>
    </l-marker>
  </l-map>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { LMap, LTileLayer, LMarker, LTooltip } from "@vue-leaflet/vue-leaflet";
import "leaflet/dist/leaflet.css";
import { getData } from "@/services/map";

const places = ref([]);
const url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const attribution =
  "&copy; <a target='_blank' href='http://osm.org/copyright'>OpenStreetMap</a> contributors";
const zoom = ref(6);
const center = ref([40, -4]);

onMounted(async () => {
  places.value = await getData();
});
</script>
