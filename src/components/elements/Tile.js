import React from 'react'
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { 

    content,
    container,
    textColumn,
    imgContainer,
    textContainer,

} from './tile.module.css'

function Tile({ label }) {

    const data = useStaticQuery(graphql`
    query {
      cloudinaryMedia(folder: {eq: "gatsby-cloudinary/temp"}) {
          gatsbyImageData(placeholder: BLURRED)
          context {
            custom {
              alt
            }
          }
        }
    }
  `)
  const image = getImage(data.cloudinaryMedia);
  const altText = data.cloudinaryMedia.context.custom.alt

    return (
        <div className={container}>
            <div className={content}>
                
                <div className={imgContainer}> 
                    <GatsbyImage image={image} alt={altText}/>
                </div>
                <div className={textColumn}>
                    <div className={textContainer}>
                        {label}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tile