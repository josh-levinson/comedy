import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"

const Item = props => {
	const defaultFlyer = props.data.allFile.edges.filter(edge => edge.node.name === "default_flyer")[0].node
	
	console.log(defaultFlyer);
  return (
  <Layout>
    <div>
      <h1>{props.pageContext.summary}</h1>
      <h3>{props.pageContext.location}</h3>
      <h3>{props.pageContext.start}</h3>
      <p>{props.pageContext.description}</p>
			<Img fluid={defaultFlyer.childImageSharp.fluid} />
      <Link to="/">Home</Link>
    </div>
  </Layout>
)
}

export default Item;

export const query = graphql`
  query {
    allFile(filter: {
      extension: {regex: "/(jpg)|(jpeg)|(png)|/"},
      sourceInstanceName: {eq: "images"}})
    {
      edges {
        node {
					name
          childImageSharp {
            fluid(maxWidth: 600, quality: 100) {
              originalName
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
`
