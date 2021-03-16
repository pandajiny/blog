module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-output`,
      options: {
        publicPath: "public",
        rmPublicFolder: false,
      },
    },
  ],
};
