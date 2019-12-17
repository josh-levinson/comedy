import React from "react";
import { graphql } from "gatsby";

const Item = props => (
  <div>
    <h1>{props.pageContext.summary}</h1>
    <h3>{props.pageContext.location}</h3>
    <h3>{props.pageContext.start}</h3>
    <p>{props.pageContext.description}</p>
  </div>
);

export default Item;
