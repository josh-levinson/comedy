import React from "react"
import { Link } from "gatsby"
import style from "./show_blurb.module.css"

export default props => (
  <div className={style.container}>
    <div className={style.showBlurb}>
      <div>
        <Link to={props.alternative_id}>{props.summary}</Link>
      </div>
      <div>
        {new Date(props.dateTime).toLocaleString()}
      </div>
      <div>
        {props.location}
      </div>
    </div>
  </div>
)
