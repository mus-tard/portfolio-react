import * as React from 'react'
import { Link } from "gatsby"
import {
    link,
    container
} from './layout.module.css'
import Nav from '../blocks/Nav'

import Button from "../buttons/Button"

function Layout({ children }) {
    console.log(children.props)

    return (
        <div className={container}>
            <Nav />
            {children.props.location.pathname != "/" && 
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
            <main>
                {children}
            </main>
        </div>
    )
}

export default Layout
