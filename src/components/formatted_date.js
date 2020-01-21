import React from 'react'
import moment from 'moment'

export default props => (
  <div>
    {formatDate(props.dateTime)}
  </div>
)

function formatDate(date) {
  return moment(date).format("ddd MMM do, YYYY h:mma") 
}
