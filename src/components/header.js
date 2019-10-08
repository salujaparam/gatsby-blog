import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import headerStyles from "./header.module.scss"
import {FaLinkedin, FaGithub, FaDiscord, FaEnvelope, FaWhatsapp} from 'react-icons/fa'

export default function Header() {
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
    <header className={headerStyles.header}>
      <h1>
        <Link className={headerStyles.title} to="/">
          {data.site.siteMetadata.author}
        </Link>
      </h1>
      <nav className={headerStyles.navMainList}>
        <ul className={headerStyles.navList}>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/blog"
            >
              Blogs
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/projects"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
        <ul className={headerStyles.navSocialList}>
          <li>
            <a href="https://www.linkedin.com/in/param-saluja-8a011a171/" target="_blank" rel="noopener noreferrer"
                  className={headerStyles.navItem}
            >
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a href="https://github.com/salujaparam" target="_blank" rel="noopener noreferrer"
                  className={headerStyles.navItem}
            >
              <FaGithub />
            </a>
          </li>
          <li>
            <a href="https://wa.me/919566056677" target="_blank" rel="noopener noreferrer"
                className={headerStyles.navItem}
            >
              <FaWhatsapp/>
            </a>
          </li>
          <li>
            <a href="mailto:salujaparam646@gmail.com?compose=new" target="_blank" rel="noopener noreferrer"
                className={headerStyles.navItem}
            >
              <FaEnvelope/>
            </a>
          </li>
          <li>
            <a href="https://discord.gg/dH4r3j8" target="_blank" rel="noopener noreferrer"
                className={headerStyles.navItem}
            >
              <FaDiscord/>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
