const env = require("react-native-dotenv");

module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [//Array
      [
        "module:react-native-dotenv",//loads in this into a bundler
        {
          moduleName: "@env",
          path: ".env",
        },
      ],
    ],
  };
};