import React from "react"
import { Link } from "gatsby"
import FormattedDate from "./formatted_date"
import { Pane, Text } from "evergreen-ui"

export default props => (
  <Pane 
    padding={5}
    background="redTint"
    border="default"
    borderRadius={3}
    width="75%"
    display="grid"
    gridTemplateColumns="50% 50%"
    gridTemplateRows="50% 50%"
    marginTop={10}
  >
    <Pane gridColumnStart={1} gridColumnEnd={2} gridRowStart={1} gridRowEnd={2}><Link to={props.alternative_id}>{props.summary}</Link></Pane>
    <Pane gridColumnStart={1} gridColumnEnd={2} gridRowStart={2} gridRowEnd={3}><FormattedDate dateTime={props.dateTime} /></Pane>
    <Pane gridColumnStart={2} gridColumnEnd={3} gridRowStart={1} gridRowEnd={3} justifySelf="end">{props.location}</Pane>
  </Pane>
)
