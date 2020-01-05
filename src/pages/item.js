import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout"

const Item = props => (
  <Layout>
    <div>
      <h1>{props.pageContext.summary}</h1>
      <h3>{props.pageContext.location}</h3>
      <h3>{props.pageContext.start}</h3>
      <p>{props.pageContext.description}</p>
      <Link to="/">Home</Link>
    </div>
  </Layout>
);

export default Item;
