import React from "react";
import { graphql } from "gatsby";

/* 
See gatsby-node issue

const Item = ({ data }) => {
  return <h1>{data.calendar.items.summary}</h1>;
};

export const query = graphql`
  query($id: String) {
		calendar {
			items(id: { eq: $id }) {
				id
				summary
				description
				location
				start {
					date	
				}
			}
		}
  }
`;

export default Item;

*/
