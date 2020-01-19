import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import GatsbyImage from "gatsby-image";

/**
 * Uses GatsbyImage and GraphQL to return all images.
 * @see https://www.orangejellyfish.com/blog/a-comprehensive-guide-to-images-in-gatsby/
 */
const ImageSupplier = () => {

  // Don't forget to set the size of your image in
  // fluid(maxWidth: 300, quality: 100) {
  const { allFile } = useStaticQuery(graphql`
    query {
      allFile(filter: {
        extension: {regex: "/(jpg)|(jpeg)|(png)/"}, 
        sourceInstanceName: {eq: "flyers"}}) 
      {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 600, quality: 100) {
              originalName
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }`);

  return ( allFile.edges );
};

export default ImageSupplier;
