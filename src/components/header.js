import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Pane, Heading, TabNavigation, Tab } from "evergreen-ui"

const Header = ({ siteTitle }) => (
  <Pane>
    <Heading size={700} marginTop="default">{siteTitle}</Heading>
    <TabNavigation>
      <Tab><Link to="/">Home</Link></Tab>
      <Tab><Link to="/full_list">Shows</Link></Tab>
      <Tab><Link to="/about">About</Link></Tab>
    </TabNavigation>
  </Pane>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
