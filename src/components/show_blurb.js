import React from "react"
import { Link } from "gatsby"
import style from "./show_blurb.module.css"
import FormattedDate from "./formatted_date"

export default props => (
  <div className={style.container}>
    <div className={style.showBlurb}>
      <div>
        <Link to={props.alternative_id}>{props.summary}</Link>
      </div>
      <FormattedDate dateTime={props.dateTime} />
      <div>
        {props.location}
      </div>
    </div>
  </div>
)
