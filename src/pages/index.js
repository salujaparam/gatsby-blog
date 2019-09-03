import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import backgroundStyles from "./background.module.scss"
import photo from "./photo.jpeg"

const IndexPage = () => {
  return (
    <div className={backgroundStyles.container}>
      <Head title="Home" />
      <Layout>
        <h1>Full Stack Developer</h1>
        <div className={backgroundStyles.image}>
          <img src={photo} alt="Param Saluja" className={backgroundStyles.img}/>
          <p>
            Currently an undergrad and working on the domain of full stack
            development.I am  pursuing my B.Tech. in Computer Science
            Engineering.I specialize in building applications specific to the
            business needs of my clients. I have done work in software
            development, front-end and back-end web development using various
            libraries, mostly concerned with JavaScript.
          </p>
        </div>
      </Layout>
    </div>
  )
}

export default IndexPage
