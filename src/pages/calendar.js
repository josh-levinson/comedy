import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Calendar = () => (
  <Layout>
    <SEO title="About" />
    <h1>About Josh Levinson.</h1>
    <p>Josh Levinson is a guy who writes words and sometimes says then on stage and also sometimes he writes code (though not usually on stage).</p>
    <Link to="/">home</Link>
  </Layout>
)

export default Calendar
