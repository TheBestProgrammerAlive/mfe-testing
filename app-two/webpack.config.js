const { shareAll, share, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'app-two',

  exposes: {
    './Two': './src/app/two/two.module.ts',
  },
  shared: share({
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
    "@ngrx/store" :{
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }
  }),

});
