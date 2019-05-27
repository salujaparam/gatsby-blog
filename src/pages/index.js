import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const IndexPage = () => {
  return (
    <div>
      <Head title="Home" />
      <Layout>
        <h1>The Great Gatsby</h1>
        <h2>I'm Param, a full-stack developer living in Chennai.</h2>
        <p>
          Need a developer? <Link to="/contact">Contact Me</Link>
        </p>
      </Layout>
    </div>
  )
}

export default IndexPage
