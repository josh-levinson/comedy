import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ShowBlurb from "../components/show_blurb"
import { Pane, Text } from "evergreen-ui"

const FullListPage = ({data}) => {
  return (
    <Layout>
      <SEO title="Full Show List" />
      <h1>All Upcoming Shows</h1>
      <Pane
        display="flex"
        flexDirection="column"
        alignItems="center"
        marginTop={25}
      >
       
        {data.allItems.edges.map(({ node }, index) => (
          <ShowBlurb 
            alternative_id={node.alternative_id}
            summary={node.summary}
            location={node.location}
            dateTime={node.start.dateTime}
          />
        ))}
      </Pane>
    </Layout>
  )
}
export default FullListPage

export const query = graphql`
  query GetAllShows ($currentDate:Date) {
    allItems(
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
