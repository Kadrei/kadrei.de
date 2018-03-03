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
           * Create an RSS feed (or multiple feeds) for your Gatsby site.
           * @see https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-feed
           */
          'gatsby-plugin-feed',
        ],
      },
    },
  ],
}
