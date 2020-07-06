import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About US" />
    <h1>About us</h1>
    <p> We deliver high qualited content</p>
    <Link to="/">Back to Home</Link>
  </Layout>
)

export default AboutPage
