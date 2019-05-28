import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import backgroundStyles from "./background.module.scss"
import aboutStyles from "./about.module.scss"

export default function AboutPage() {
  return (
    <div className={backgroundStyles.container}>
      <Layout>
        <Head title="About" />
        <p>
          Final year B.Tech student at SRMIST. Inquisitive, hard-working and
          consistent. Looking for internship opportunities where I can apply my
          skills and contribute to real-world projects. Worked on various
          projects using different tools, technologies, libraries and
          frameworks. Have a strong grasp in front-end and back-end web
          development.
        </p>
        <h3>TECHNICAL SKILLS</h3>
        <ul>
          <li>Full-Stack Development</li>
          <li>Object Oriented Programming</li>
          <li>Data Structures</li>
        </ul>
        <h3>EXPERIENCE</h3>
        <p className={aboutStyles.para}>Saharan Engineering Works : Trainee</p>
        <p>
          Worked on the official website of saharan engineering works. Gained
          knowledge ondifferent web technologies, worked with bootstrap
          framework and understood aboutvarious frontend and backend
          technologies used to create a dynamic website.
        </p>
        <p>
          Want to work with me? Reach out{" "}
          <a
            className={aboutStyles.link}
            href="https://www.linkedin.com/in/param-saluja-8a011a171/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @linkedin
          </a>
        </p>
      </Layout>
    </div>
  )
}
