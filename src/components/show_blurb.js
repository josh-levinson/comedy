import React from "react"
import { Link } from "gatsby"
import FormattedDate from "./formatted_date"
import { Pane, Text } from "evergreen-ui"

export default props => (
  <Pane 
    padding={5}
    elevation={1}
    backgroundco="tint2"
    display="flex"
  >
    <Pane><Link to={props.alternative_id}>{props.summary}</Link></Pane>
    <Pane><FormattedDate dateTime={props.dateTime} /></Pane>
    <Pane>{props.location}</Pane>
  </Pane>
)
