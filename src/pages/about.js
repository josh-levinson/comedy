import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Pane, Heading, Paragraph, Link } from "evergreen-ui"

const About = () => (
  <Layout>
    <SEO title="About" />
    <Pane
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        marginTop={25}
        width="75%"
    >
      <Heading size={800}>About Josh Levinson</Heading>
      <Paragraph marginTop="default">
        Josh Levinson is an up and coming stand up comic who has performed in clubs and bars all over New England. 
        Software engineer by day and comedian by night, audiences enjoy Josh's unassuming demeanor as he turns 
        his insecurities into punchlines. Whether he's lending his sense of humor to the popular blog 
        <Link href="https://betweentworocks.com" target="_blank" rel="noopener noreferrer">Between Two Rocks</Link>
        or performing on stage, he gives you more than the typical IT guy next door. Josh is able to laugh at himself 
        in a way that is infectious and gets you to laugh along with him.
      </Paragraph>
    </Pane>
  </Layout>
)

export default About
