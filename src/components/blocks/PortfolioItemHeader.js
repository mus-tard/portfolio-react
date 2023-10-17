import React from 'react'
// import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import {
    content,
    pgHeader,
    pgSummary,
    container,
    headerImgContainer
 } from './portfolioItemHeader.module.css'
// import Button from "../buttons/Button"

function PortfolioItemHeader( {image, alt, title, summary} ) {
    return (

    <div className={container}>
        <div className={content}>
            <h1 className={pgHeader}>{title}</h1>
            {/* <Link
                to="/"
                >
                <Button
                type="back"
                label="Back"
                />
            </Link> */}
            <p className={pgSummary}>{summary}</p>
        </div>
        <div className={headerImgContainer}>
            <GatsbyImage image={image} alt={alt}/>
        </div>
    </div>
    )
}

export default PortfolioItemHeader

