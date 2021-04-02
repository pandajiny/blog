const path = require("path");

module.exports = {
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-plugin-output`,
      options: {
        publicPath: "public",
        rmPublicFolder: false,
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@components": path.resolve(__dirname, "src/components"),
          "@icons": path.resolve(__dirname, "src/images/icons"),
          "@styles": path.resolve(__dirname, "src/styles"),
        },
        extensions: [],
      },
    },
  ],
};
