import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import backgroundStyles from "./background.module.scss"

export default function ContactPage() {
  return (
    <div className={backgroundStyles.container}>
      <Layout>
        <Head title="Contact" />
        <h1>Contact Page</h1>
        <p>
          The best way to reach me is via{" "}
          <a
            href="https://www.linkedin.com/in/param-saluja-8a011a171/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @param-saluja
          </a>{" "}
          on linkedin
        </p>
      </Layout>
    </div>
  )
}
