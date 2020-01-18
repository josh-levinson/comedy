import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"

const Item = props => {
  console.log(props);
  return (
  <Layout>
    <div>
      <h1>{props.pageContext.summary}</h1>
      <Img fixed={props.data.file.childImageSharp.fixed} />
      <h3>{props.pageContext.location}</h3>
      <h3>{props.pageContext.start}</h3>
      <p>{props.pageContext.description}</p>
      <Link to="/">Home</Link>
    </div>
  </Layout>
)
}

export default Item;

export const query = graphql`
  query {
    file(relativePath: { eq: "default_flyer.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 750, height: 750) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
