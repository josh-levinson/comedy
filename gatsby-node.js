/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const item = path.resolve("src/pages/item.js")
  const result = await graphql(`
    {
      allItems {
        edges {
          node {
            id
            alternative_id
            summary
            location
            start {
              dateTime
            }
            description
          }
        }
      }
    }
  `)

  return Promise.all(
    result.data.allItems.edges.map(async edge => {
      if (!edge.node.alternative_id) {
        return
      }
      await createPage({
        path: edge.node.alternative_id,
        component: item,
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          id: edge.node.id,
          summary: edge.node.summary,
          location: edge.node.location,
          start: edge.node.start.dateTime,
          description: edge.node.description
        },
      })
    })
  )
}
