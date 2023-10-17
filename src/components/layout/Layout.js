import * as React from 'react'
import {

    container
} from './layout.module.css'
import Nav from '../blocks/Nav'




function Layout({ children }) {
    console.log(children.props)

    return (
        <>
            <header className={container}>
                <Nav />
            </header>
            <main className={container}>
                {children}
            </main>
        </>
        
    )
}

export default Layout
