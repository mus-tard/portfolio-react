import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export default function Nav() {
    const data = useStaticQuery(graphql`
    query {
      cloudinaryMedia(folder: {eq: "gatsby-cloudinary/logo"}) {
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
    <nav>
        <GatsbyImage image={image} alt={altText}/>
    </nav>
    
  );
}
