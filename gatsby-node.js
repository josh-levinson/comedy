/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

/* 
BROKEN: Require some way of getting item id's cause this
method expects node's and items don't have id's in
allCalendar -- maybe schema change/transform?

const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
			allCalendar {
				nodes {
					items {
						id
					}
				}
			}
   	}
 `);
 return Promise.all(
   result.data.allCalendar.nodes.map(async node => {
     await createPage({
       path: node.id,
       component: path.resolve("./src/pages/item.js"),
       context: {
         // Data passed to context is available
         // in page queries as GraphQL variables.
         id: node.id
       }
     });
   })
 );
};

*/
