module.exports = {
  siteMetadata: {
    title: `Josh Levinson: jokes, words, etc.`,
    description: `Home page for Josh Levinson. Comedy dates,  thoughts, things I'll do for money.`,
    author: `@jlevnhv`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: `images`,
      },
    },
		{
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
			resolve: "gatsby-source-apiserver",
      options: {
        url: `https://www.googleapis.com/calendar/v3`,
				apiKey: `APIKEY`,
				calendarId: `e46tdagg6fbqkki2uqr8njer6c@group.calendar.google.com`,
				scopes: `https://www.googleapis.com/auth/calendar.readonly`,

				method: "get",

      	headers: {
        "Content-Type": "application/json"
      	},
				data: {},
				name: `events`,
				entityLevel: `data.events`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
