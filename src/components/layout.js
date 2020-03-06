/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Pane } from "evergreen-ui"

import Header from "./header"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Pane
      background="tint2"
      border="muted"
      marginLeft={48}
      marginRight={48}
      marginY={24}
      paddingTop={12}
      paddingX={40}
    >
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, created by Josh Levinson with Gatsby.
      </footer>
    </Pane>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
