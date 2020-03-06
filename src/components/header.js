import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Pane, Heading, TabNavigation, Tab } from "evergreen-ui"

const Header = ({ siteTitle }) => (
  <Pane
    display="flex"   
    flexDirection="column"
  >
    <Pane
      alignItems="center"
    >
      <Heading
        size={900}
        marginTop="default"
      >
        {siteTitle}
      </Heading>
    </Pane>
    <Pane>
      <TabNavigation>
        <Tab><Link to="/">Home</Link></Tab>
        <Tab><Link to="/full_list">Shows</Link></Tab>
        <Tab><Link to="/about">About</Link></Tab>
      </TabNavigation>
    </Pane>
  </Pane>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
