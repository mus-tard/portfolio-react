"use client" // Required for Partial Hydration, client components (RSC)
import * as React from 'react'
import { Link } from "gatsby"
import {
    link,
    container
} from './layout.module.css'
import Nav from '../blocks/Nav'

import Button from "../buttons/Button"
import { storyblokInit, apiPlugin } from "gatsby-source-storyblok"

import configuration from '../../../gatsby-config'

const sbConfig = configuration.plugins.find((item) => item.resolve === 'gatsby-source-storyblok')

storyblokInit({
  accessToken: sbConfig.options.accessToken,
  // bridge: false,
  apiOptions: {
    region: "us",
  },
  use: [apiPlugin],
  components: {
    nav: Nav,
  }
});

function Layout({ children }) {
    console.log(children.props)

    return (
        <>
            <header className={container}>
                <Nav />
            </header>
            <main className={container}>
                {children.props.location.pathname !== "/" && 
                    <Link
                        to="/"
                        className={link}
                    >
                        <Button
                            type="back"
                            label="Home"
                        />
                    </Link>
                }
                {children}
            </main>
        </>
        
    )
}

export default Layout
