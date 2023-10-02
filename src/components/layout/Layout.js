import * as React from 'react'

const Layout = ({ children }) => {
    return (
        <div>
            <nav>
                Nav
            </nav>
            <main>
                {children}
            </main>
        </div>
    )
}

export default Layout
