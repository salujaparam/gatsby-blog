import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import backgroundStyles from "./background.module.scss"
import grass from "../posts/gatsby/grass.png"

const IndexPage = () => {
  return (
    <div className={backgroundStyles.container}>
      <Head title="Home" />
      <Layout>
        <h1>Full Stack Developer</h1>
        <p>
          I am a software developer currently living in Chennai.I specialize in
          building applications specific to the business needs of my clients. I
          have done work in software development, front-end/back-end web and
          database/server management
        </p>
        <img src={grass} alt={grass} />
      </Layout>
    </div>
  )
}

export default IndexPage
