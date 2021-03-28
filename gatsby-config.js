module.exports = {
  'siteMetadata': {
    'title': 'rroggia.github.io',
  },
  'plugins': [
    'gatsby-plugin-styled-components',
    {
      'resolve': 'gatsby-plugin-google-analytics',
      'options': {
        'trackingId': 'UA-150419482-1',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/posts`,
        name: `posts`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `roboto`,
        ],
        display: 'swap'
      }
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: '/images/'
        }
      }
    }
  ],
}
