module.exports = {
  'siteMetadata': {
    'title': 'Renan Roggia - A developer with flipflops',
    'siteUrl': 'https://rroggia.github.io',
    'description': 'The amazing stuff I\'ve been working on',
    'mySelf': {
      'name': 'Renan Roggia',
      'description': 'I consider myself a tech problem solver.',
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
        'path': `${__dirname}/posts`,
        'name': 'posts',
      },
    },
    {
      'resolve': 'gatsby-source-filesystem',
      'options': {
        'path': `${__dirname}/reading-content`,
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
        'fonts': [ `roboto` ],
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
        'path': `${__dirname}/engineer-diary`,
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
