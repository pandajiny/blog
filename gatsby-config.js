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
  ],
};
