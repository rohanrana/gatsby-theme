module.exports = {
  __experimentalThemes: ['core'],
  plugins: [
      {
          resolve: 'gatsby-plugin-page-creator',
          options: {
              path: `${__dirname}/src/pages`
          },
          
      },`gatsby-plugin-sass`
  ]
};
