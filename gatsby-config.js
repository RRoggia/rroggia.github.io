module.exports = {
  'siteMetadata': {
    'title': 'rroggia.github.io',
    'mySelf': {
      'name': 'Renan Roggia',
      'description': 'I consider myself a tech problem solver.'
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
        'path': `${__dirname}/notes`,
        'name': 'notes',
      },
    },
    'gatsby-transformer-remark',
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
    }
  ],
}
