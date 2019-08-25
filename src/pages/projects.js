import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Layout from "../components/layout"
import Head from "../components/head"
import backgroundStyles from "./background.module.scss"
import projectStyles from "./projects.module.scss"

export default function Projects() {
  const data = useStaticQuery(graphql`
    {
      allContentfulProjects {
        edges {
          node {
            title
            info {
              json
            }
            id
          }
        }
      }
    }
  `)

  return (
    <div className={backgroundStyles.container}>
      <Layout>
        <Head title="Projects" />
        <div className={projectStyles.project}>
          <ul className={projectStyles.styles}>
            {data.allContentfulProjects.edges.map(edge => {
              return (
                <li key={edge.node.id}>
                  <h3>{edge.node.title}</h3>
                  <div className={projectStyles.display}>
                    {documentToReactComponents(edge.node.info.json)}
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </Layout>
    </div>
  )
}
