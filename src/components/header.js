import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import headerStyles from "./header.module.scss"
import {FaLinkedin, FaGithub, FaTwitterSquare, FaHackerrank, FaInstagram} from 'react-icons/fa'

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
        <ul className={headerStyles.navList}>
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
          <a href="https://twitter.com/param53602815" target="_blank" rel="noopener noreferrer"
                className={headerStyles.navItem}
            >
              <FaTwitterSquare />
          </a>
          </li>
          <li>
          <a href="https://www.hackerrank.com/salujaparam646" target="_blank" rel="noopener noreferrer"
                className={headerStyles.navItem}
            >
              <FaHackerrank />
          </a>
          </li>
          <li>
            <a href="https://www.instagram.com/param.saluja/" target="_blank" rel="noopener noreferrer"
                className={headerStyles.navItem}
            >
              <FaInstagram />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
