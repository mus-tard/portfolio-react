import * as React from 'react'
import {
    container
} from './layout.module.css'
import Nav from '../blocks/Nav'

function Layout({ children }) {
    return (
        <div className={container}>
            <Nav />
            <main>
                {children}
            </main>
        </div>
    )
}

export default Layout
