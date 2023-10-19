import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import {
    content,
    pgHeader,
    pgSummary,
    container,
    allContent,
    headerImgContainer
 } from './subpageHeader.module.css'


function SubpageHeader( {image, alt, title, summary} ) {
    return (

    <div className={container}>
        <div className={allContent}>
            <div className={content}>
                <h1 className={pgHeader}>{title}</h1>
                <p className={pgSummary}>{summary}</p>
            </div>
            <div className={headerImgContainer}>
                <GatsbyImage image={image} alt={alt}/>
            </div>

        </div>
    </div>
    )
}

export default SubpageHeader

