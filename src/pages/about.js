import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <SEO title="About" />
    <h1>About Josh Levinson.</h1>
    <p>Josh Levinson is an up and coming stand up comic who has performed in clubs and bars all over New England. 
    Software engineer by day and and comedian by night, audiences enjoy Josh's unassuming demeanor as he turns 
    his insecurities into punchlines. Whether he's lending his sense of humor to the popular blog 
    <a href="https://betweentworocks.com" target="_blank">Between Two Rocks</a>
    or performing on stage, he gives you more than the typical IT guy next door. Josh is able to laugh at himself 
    in a way that is infectious and gets you to laugh along with him.</p>
    <Link to="/">home</Link>
  </Layout>
)

export default About
