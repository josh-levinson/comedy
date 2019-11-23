import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Calendar = ({children}) => (
  <div
    style={{
      maxWidth: 600,
      padding: `1.5rem`,
    }}
  >
    {children}
  </div>
)

export default Calendar
