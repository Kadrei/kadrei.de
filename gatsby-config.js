module.exports = {
  siteMetadata: {
    title: '.k3 - Personal Website & Blog',
  },
  plugins: [
    /**
     * Use React 16 with your Gatsby v1 site!
     * @see https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-react-next
     */
    'gatsby-plugin-react-next',
    /**
     * Provides drop-in support for server rendering data added with React Helmet.
     * @see https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-react-helmet/
     */
    'gatsby-plugin-react-helmet',
    /**
     * Intercepts local links from markdown and other non-react pages.
     * Does a client-side pushState to avoid the browser having to refresh the page.
     * @see https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-catch-links/
     */
    'gatsby-plugin-catch-links',
    /**
     * Create an RSS feed (or multiple feeds) for your Gatsby site.
     * @see https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-feed
     */
    'gatsby-plugin-feed',
    {
      /**
       * Plugin for creating File nodes from the file system.
       * @see https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-source-filesystem
       */
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      /**
       * Parses Markdown files using Remark.
       * @see https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-transformer-remark
       * @see https://remark.js.org/
       */
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          /**
           * Adds syntax highlighting to code blocks in markdown files using PrismJS.
           * @see https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-remark-prismjs
           * @see http://prismjs.com/
           */
          'gatsby-remark-prismjs',
          /**
           * Copies local files linked to/from markdown to your public folder.
           * @see https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-remark-copy-linked-files
           */
          'gatsby-remark-copy-linked-files',
          /**
           * Exposes several image processing functions built on the Sharp image processing library.
           * @see https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-sharp
           * @see https://github.com/lovell/sharp
           */
          `gatsby-plugin-sharp`,
          {
            /**
             * Processes images in markdown so they can be used in the production build.
             * @see https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-remark-images
             */
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 590,
            },
          },
        ],
      },
    },
  ],
}
