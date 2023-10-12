import React from 'react'
import ArrowIcon from '../icons/ArrowIcon'
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { 

    content,
    container,
    decoration,
    textColumn,
    imgContainer,
    textContainer,
    arrowContainer

} from './tile.module.css'

function Tile() {

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
            <div className={decoration}></div>
            <div className={content}>
                
                <div className={imgContainer}> 
                <GatsbyImage image={image} alt={altText}/>
                </div>
                <div className={textColumn}>
                    <div className={textContainer}>
                        Process Design
                    </div>
                    <div className={arrowContainer}>
                        <ArrowIcon
                            width='30px'

                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tile