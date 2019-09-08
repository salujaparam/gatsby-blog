import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import footerStyles from "./footer.module.scss"
import {FaLinkedin, FaGithub, FaTwitterSquare, FaHackerrank, FaDiscord} from 'react-icons/fa'


export default function Footer() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)
  return (
    <footer className={footerStyles.footer}>
      <p>Created by {data.site.siteMetadata.author}, All Rights Reserved © 2019</p>
      <ul className={footerStyles.footerSocialList}>
          <li>
            <a href="https://www.linkedin.com/in/param-saluja-8a011a171/" target="_blank" rel="noopener noreferrer"
                  className={footerStyles.footerItem}
            >
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a href="https://github.com/salujaparam" target="_blank" rel="noopener noreferrer"
                  className={footerStyles.footerItem}
            >
              <FaGithub />
            </a>
          </li>
          <li>
          <a href="https://twitter.com/param53602815" target="_blank" rel="noopener noreferrer"
                className={footerStyles.footerItem}
            >
              <FaTwitterSquare />
          </a>
          </li>
          <li>
          <a href="https://www.hackerrank.com/salujaparam646" target="_blank" rel="noopener noreferrer"
                className={footerStyles.footerItem}
            >
              <FaHackerrank />
          </a>
          </li>
          <li>
            <a href="https://discord.gg/dH4r3j8" target="_blank" rel="noopener noreferrer"
                className={footerStyles.footerItem}
            >
              <FaDiscord />
            </a>
          </li>
        </ul>
    </footer>
  )
}
