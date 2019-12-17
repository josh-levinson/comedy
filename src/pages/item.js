import React from "react"

const Item = props => {
  console.log(props)
  return <h1>{props.pageContext.summary}</h1>
}

export default Item
