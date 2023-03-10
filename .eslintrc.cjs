module.exports = {
  env: {
    node: true,
  },
  ignorePatterns: ["**/node_modules/**"],
  parser: "vue-eslint-parser",
  extends: [
    "plugin:vue/vue3-essential",
    "plugin:cypress/recommended",
    "eslint:recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2020,
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-unused-vars": 0,
    "vue/require-default-prop": 0,
    "vue/attribute-hyphenation": "off",
    "vue/no-v-html": "off",
    "vue/order-in-components": [
      "error",
      {
        order: [
          "name",
          ["components", "directives", "filters"],
          "emits",
          ["props", "propsData"],
          "setup",
          "el",
          "key",
          "parent",
          "functional",
          ["delimiters", "comments"],
          "extends",
          "mixins",
          ["provide", "inject"],
          "ROUTER_GUARDS",
          "layout",
          "middleware",
          "validate",
          "scrollToTop",
          "transition",
          "loading",
          "inheritAttrs",
          "model",
          "asyncData",
          "data",
          "fetch",
          "head",
          "computed",
          "watch",
          "watchQuery",
          "LIFECYCLE_HOOKS",
          "methods",
          ["template", "render"],
          "renderError",
        ],
      },
    ],
  },
};
