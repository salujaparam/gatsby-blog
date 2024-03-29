import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import backgroundStyles from "./background.module.scss"
import contactStyles from "./contact.module.scss"

export default function ContactPage() {
  return (
    <div className={backgroundStyles.container}>
      <Layout>
        <Head title="Contact" />
        <section className="contact">
          <div className="row">
            <div>
              <form
                action="https://formspree.io/salujaparam@gmail.com"
                method="POST"
              >
                {/* name */}
                <div>
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    className={contactStyles.input}
                    name="name"
                    id="name"
                    placeholder="Your Name"
                  />
                </div>
                {/* email */}
                <div>
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    className={contactStyles.input}
                    name="email"
                    id="email"
                    placeholder="email@email.com"
                  />
                </div>
                {/* description */}
                <div>
                  <label htmlFor="description">Description</label>
                  <textarea
                    type="text"
                    className={contactStyles.textarea}
                    name="description"
                    id="description"
                    placeholder="Comments....."
                    rows="5"
                  />
                </div>
                {/* submit */}
                <button
                  type="submit"
                  style={{ background: "rgba(0,0,0, 0.2)" }}
                >
                  submit
                </button>
              </form>
            </div>
          </div>
        </section>
      </Layout>
    </div>
  )
}
