import React from 'react'
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { 
    container,
    textContainer,
    imageContainer,
    mission
 } from './hero.module.css'

function Hero() {

    const data = useStaticQuery(graphql`
    query {
      cloudinaryMedia(folder: {eq: "gatsby-cloudinary/hero"}) {
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
            
            <div className={imageContainer}>
                <GatsbyImage image={image} alt={altText}/>
            </div>
            <div className={textContainer}>
                <h1>
                    Kev's Portfolio
                </h1>
                <div>
                    <p className={mission}>My mission is to continuously improve structures so that individuals can thrive.</p> 
                </div>
            </div>
        </div>
    )
}

export default Hero