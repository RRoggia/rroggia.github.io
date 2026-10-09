module.exports = {
  'siteMetadata': {
    'title': 'Renan Roggia',
    'siteUrl': 'https://rroggia.github.io',
    'description': 'Software engineer writing about cloud infrastructure, home lab experiments and the books that shaped how I work.',
    'mySelf': {
      'name': 'Renan Roggia',
      'description': 'Software engineer. Notes on cloud infrastructure, home lab experiments and the books that shaped how I work.',
      'image': 'https://rroggia.github.io/images/my-photo.jpg'
    },
    'contactMe': {
      'email': 'renanzr@gmail.com',
      'socialNetworks': [
        {
          'name': 'linkedin',
          'url': 'https://www.linkedin.com/in/renanroggia/',
        },
        {
          'name': 'github',
          'url': 'https://github.com/rroggia',
        }
      ]
    }
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
      'resolve': 'gatsby-source-filesystem',
      'options': {
        'path': `${__dirname}/content/posts`,
        'name': 'posts',
      },
    },
    {
      'resolve': 'gatsby-source-filesystem',
      'options': {
        'path': `${__dirname}/content/reading-content`,
        'name': 'reading-content',
      },
    },
    { 'resolve': 'gatsby-transformer-remark',
      'options': {
        'plugins': [
          {
            'resolve': `gatsby-remark-highlight-code`,

          },
        ],
      },
    },
    {
      'resolve': `gatsby-plugin-google-fonts`,
      'options': {
        'fonts': [ 'IBM Plex Sans:400,400i,500,600', 'IBM Plex Mono:400,500', 'Source Serif Pro:400,400i,600' ],
        'display': 'swap'
      }
    },
    {
      'resolve': 'gatsby-plugin-react-svg',
      'options': {
        'rule': {
          'include': '/images/'
        }
      }
    },
    {
      'resolve': 'gatsby-source-filesystem',
      'options': {
        'path': `${__dirname}/covers`,
        'name': 'covers',
      },
    },
    {
      'resolve': 'gatsby-source-filesystem',
      'options': {
        'path': `${__dirname}/content/engineer-diary`,
        'name': 'engineer-diary',
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-robots-txt'
  ],
}
