import React from 'react'
import { getImage, GatsbyImage } from 'gatsby-plugin-image';

import {
    image,
    content,
    container,
    figcaption
} from './imgWithCaption.module.css'


function ImgWithCaption({caption, data, imgName}) {

    const imageData = data.find(img => imgName === img.name)

    const imgSource = getImage(imageData.childCloudinaryAsset)

    const alt = imageData.childCloudinaryAsset.rawCloudinaryData.context.custom.alt
    

    return(
        <figure className={container}>
            <div className={content}>
                <GatsbyImage className={image} image={imgSource} alt={alt}/>
                <figcaption className={figcaption}>{caption}</figcaption>
            </div>
        </figure>
    )
}

export default ImgWithCaption