import React from 'react'
import { getImage, GatsbyImage } from 'gatsby-plugin-image';

import {
    image,
    imageNoShadow,
    content,
    container,
    figcaption
} from './imgWithCaption.module.css'


function ImgWithCaption({caption, data, imgName, dropShadow}) {

    const imageData = data.find(img => imgName === img.name);

    const imgSource = getImage(imageData.childCloudinaryAsset);

    const alt = imageData.childCloudinaryAsset.rawCloudinaryData.context.custom.alt;
    
    const imageStyle = dropShadow ? image : imageNoShadow;

    return(
        <figure className={container}>
            <div className={content}>
                <GatsbyImage className={imageStyle} image={imgSource} alt={alt}/>
                <figcaption className={figcaption}>{caption}</figcaption>
            </div>
        </figure>
    )
}

export default ImgWithCaption