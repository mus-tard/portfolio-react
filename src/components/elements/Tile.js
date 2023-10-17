import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { 

    content,
    container,
    textColumn,
    imgContainer,
    textContainer,

} from './tile.module.css'

function Tile({ label, img, alt }) {

    const image = getImage(img);

    return (
        <article className={container}>
            <div className={content}>
                
                <div className={imgContainer}> 
                    <GatsbyImage image={image} alt={alt}/>
                </div>
                <div className={textColumn}>
                    <h3 className={textContainer}>
                        {label}
                    </h3>
                </div>
            </div>
        </article>
    )
}

export default Tile