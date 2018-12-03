module.exports = {
  siteMetadata: {
    title: 'Ubergreen - Fairly Sourced True Trinitario Cocoa',
    description:
      'Ubergreen’s mission is to support small-scale Caribbean producers who are focused on flavour, quality, and fairly sourced cocoa.',
  },
  pathPrefix: '/ubergreen.org',
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: './static/img/favicon.png',
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          opengraph: false,
          twitter: false,
          yandex: false,
          windows: false,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png',
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        includePaths: ['node_modules', 'src/styles'],
      },
    },
  ],
};
