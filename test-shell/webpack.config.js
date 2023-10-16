const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  //name doesn't matter, it can be whatever as long as webpack here is consistent with what is stated in decl.d.ts
  //changes in webpack need to be reloaded
  remotes: {
    "one": "http://localhost:4201/remoteEntry.js",
    "two": "http://localhost:4202/remoteEntry.js",
    "three": "http://localhost:4203/remoteEntry.js",
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
