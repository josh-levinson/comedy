import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"

const Item = props => {
	let showFlyer = props.data.allFile.edges.filter(edge => edge.node.name === "default_flyer")[0].node

	const showFullDate = new Date(props.pageContext.start);
	const showDate = ("0" + showFullDate.getDate().toString()).slice(-2)
	const showMonth = ("0" + (showFullDate.getMonth() + 1).toString()).slice(-2)
	const showYear = showFullDate.getFullYear();
	const showFormattedDate = showYear + "-" + showMonth + "-" + showDate

	if (props.data.allFile.edges.filter(edge => edge.node.name === showFormattedDate).length > 0) {
		showFlyer = props.data.allFile.edges.filter(edge => edge.node.name === showFormattedDate)[0].node
	}
	
	console.log(showFormattedDate);
  return (
  <Layout>
    <div>
      <h2>{props.pageContext.summary}</h2>
      <div>{props.pageContext.location}</div>
      <div>{showFullDate.toLocaleString()}</div>
      <div>{props.pageContext.description}</div>
			<Img fluid={showFlyer.childImageSharp.fluid} />
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
