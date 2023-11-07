import * as React from 'react'
import {

    container
} from './layout.module.css'
import Nav from '../blocks/Nav'
import Footer from '../blocks/Footer'




function Layout({ children }) {

    return (
        <>
            <header className={container}>
                <Nav />
            </header>          
            <main className={container}>
                {children}
            </main>
            <footer>
                <Footer />
            </footer>
        </>
        
    )
}

export default Layout
