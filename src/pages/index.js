import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ShowBlurb from "../components/show_blurb.js"

const IndexPage = ({data}) => {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Welcome, humans.</h1>
      <h1>Upcoming Shows</h1>
      {data.allItems.edges.map(({ node }, index) => (
        <ShowBlurb 
          alternative_id={node.alternative_id}
          summary={node.summary}
          location={node.location}
          dateTime={node.start.dateTime}
        />
      ))}
    </Layout>
  )
}
export default IndexPage

export const query = graphql`
  query GetNextShows ($currentDate:Date) {
    allItems(
      limit: 5 
      filter: { start: { dateTime: { gt: $currentDate } } }
      sort: { fields: [start___dateTime], order: ASC }
    ) {
      edges {
        node {
          summary
          alternative_id
          location
          start {
            dateTime
          }
        }
      }
    }
  }
`
