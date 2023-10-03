import * as React from 'react'
import Nav from '../blocks/Nav'

const Layout = ({ children }) => {
    return (
        <div>
            <Nav />
            <main>
                {children}
            </main>
        </div>
    )
}

export default Layout
