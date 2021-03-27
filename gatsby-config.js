module.exports = {
  siteMetadata: {
    title: "rroggia.github.io",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-150419482-1",
      },
    },
  ],
};
