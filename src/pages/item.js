import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import FormattedDate from "../components/formatted_date"
import { Heading, Pane, Text } from "evergreen-ui"

const Item = props => {
	let showFlyer = props.data.allFile.edges.filter(edge => edge.node.name === "default_flyer")[0].node

	const showFullDate = new Date(props.pageContext.start);
	const showDate = ("0" + showFullDate.getDate().toString()).slice(-2)
	const showMonth = ("0" + (showFullDate.getMonth() + 1).toString()).slice(-2)
	const showYear = showFullDate.getFullYear();
	const showFormattedDate = showYear + "-" + showMonth + "-" + showDate

  const googleMapUrl = "https://www.google.com/maps/search/?api=1&query=" + encodeURI(props.pageContext.location)

	if (props.data.allFile.edges.filter(edge => edge.node.name === showFormattedDate).length > 0) {
		showFlyer = props.data.allFile.edges.filter(edge => edge.node.name === showFormattedDate)[0].node
	}
	
	console.log(showFormattedDate);
  return (
  <Layout>
    <Pane 
      padding={5}
      background="redTint"
      border="default"
      borderRadius={3}
      width="75%"
      display="flex"
      marginTop={10}
      >
        <Pane
          display="flex"
          flexDirection="column"
          justifyContent="center"
          paddingRight={30}
        >
          <Heading size={600}>{props.pageContext.summary}</Heading>
          <FormattedDate dateTime={props.pageContext.start} />  
          <a href={googleMapUrl} target="_blank" rel="noopener">
            <Text>{props.pageContext.location}</Text>
          </a>
          <Text>{props.pageContext.description}</Text>
        </Pane>
        <Pane
          alignItems="center"  
        >
          <Img fixed={showFlyer.childImageSharp.fixed} />
        </Pane>
    </Pane>
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
            fixed(width: 400) {
              originalName
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
`
