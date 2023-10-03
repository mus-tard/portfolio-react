import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export default function GasbyImagePage({ data }) {
    const image = getImage(data.cloudinaryMedia);
    const altText = data.cloudinaryMedia.context.custom.alt
  return (
    <main>
             
<GatsbyImage image={image} alt={altText}/>

    </main>
  );
}

export const query = graphql`
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
`;