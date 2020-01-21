import React from "react"
import { Link } from "gatsby"
import style from "./show_blurb.module.css"

export default props => (
  <div className={style.container}>
    <div className={style.showBlurb}>
      <Link to={props.alternative_id}>{props.summary}</Link><br />
      {props.location}<br />
      {new Date(props.dateTime).toLocaleString()}
    </div>
  </div>
)
