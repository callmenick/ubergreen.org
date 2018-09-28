module.exports = {
  siteMetadata: {
    title: 'Ubergreen - Fair Trade True Trinitario Cocoa',
    siteUrl: 'http://ubergreen.org',
  },
  pathPrefix: '/ubergreen.org',
  plugins: [
    'gatsby-plugin-react-helmet',
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