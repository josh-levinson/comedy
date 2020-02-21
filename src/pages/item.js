import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import FormattedDate from "../components/formatted_date"

const Item = props => {
	let showFlyer = props.data.allFile.edges.filter(edge => edge.node.name === "default_flyer")[0].node

	const showFullDate = new Date(props.pageContext.start);
	const showDate = ("0" + showFullDate.getDate().toString()).slice(-2)
	const showMonth = ("0" + (showFullDate.getMonth() + 1).toString()).slice(-2)
	const showYear = showFullDate.getFullYear();
	const showFormattedDate = showYear + "-" + showMonth + "-" + showDate

  const googleMapUrl = "https://maps.google.com/search/" + encodeURI(props.pageContext.location)

	if (props.data.allFile.edges.filter(edge => edge.node.name === showFormattedDate).length > 0) {
		showFlyer = props.data.allFile.edges.filter(edge => edge.node.name === showFormattedDate)[0].node
	}
	
	console.log(showFormattedDate);
  return (
  <Layout>
    <div>
      <h2>{props.pageContext.summary}</h2>
      <FormattedDate dateTime={props.pageContext.start} />  
      <div>
        <a href={googleMapUrl}>
          {props.pageContext.location}
        </a>
      </div>
      <div>{props.pageContext.description}</div>
			<Img fixed={showFlyer.childImageSharp.fixed} />
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
            fixed(width: 600) {
              originalName
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
`
