import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ShowBlurb from "../components/show_blurb"
import Img from "gatsby-image"
import { Pane, Heading } from "evergreen-ui"

const IndexPage = ({data}) => {
  return (
    <Layout>
      <SEO title="Home" />
      <Pane
        display="flex"   
        alignItems="center"
        justifyContent="center"
      >
        <Pane
          paddingRight={25}  
        >
          <Img fixed={data.logoImage.childImageSharp.fixed} />
        </Pane>
        <Pane>
       		<Img fixed={data.headshotImage.childImageSharp.fixed} />   
        </Pane>
      </Pane>
      <Pane
        display="flex"
        flexDirection="column"
        alignItems="center"
        marginTop={25}
      >
        <Heading size={800}>Upcoming Shows</Heading>
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
    logoImage: file(relativePath: { eq: "namelogo.png" }) {
      childImageSharp {
        fixed(width: 400) {
          ...GatsbyImageSharpFixed
        }
      }
    }
   	headshotImage: file(relativePath: { eq: "josh-pink.jpg" }) {
      childImageSharp {
        fixed(width: 350, height: 350) {
          ...GatsbyImageSharpFixed
        }
      }
    } 
  }
`
