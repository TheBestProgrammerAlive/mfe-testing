const {
  shareAll,
  share,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  name: "app-one",

  exposes: {
    "./One": "./src/app/one/one.module.ts",
  },

  shared: share({
    //...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
    "@angular/core": {
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    },
    "@angular/common": {
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    },
    "@angular/common/http": {
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    },
    "@angular/router": {
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    },
    "primeng": {
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    },
  }),
});
