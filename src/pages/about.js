import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

export default function AboutPage() {
  return (
    <div>
      <Layout>
        <Head title="About" />
        <h1>About Page</h1>
        <p>This is the about page.</p>
        <p>
          <Link to="/contact">Want to work with me? Reach out.</Link>
        </p>
      </Layout>
    </div>
  )
}
