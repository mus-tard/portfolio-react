import React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import { useStaticQuery, graphql } from 'gatsby';
import { getSrc } from 'gatsby-plugin-image';

function SeoBuilder({ title, description, img, pathname, imgType, imgWidth, imgHeight, imgAlt, children }) {
  const data = useStaticQuery(graphql`
  query {
    file(name: {eq: "IntroductoryImage"}) {
      childCloudinaryAsset {
        gatsbyImageData(placeholder: BLURRED)
        rawCloudinaryData {
          context {
            custom {
              alt
            }
          }
        }
        originalWidth
        originalHeight
        originalFormat
      }
    }
  }
`)  

const fallbackImageURL = getSrc(data.cloudinaryMedia);
const fallbackAltText = data.file.childcloudinaryAsset.context.custom.alt
const fallbackFormat = data.file.childcloudinaryAsset.originalFormat
const fallbackHeight = data.file.childcloudinaryAsset.originalHeight
const fallbackWidth = data.file.childcloudinaryAsset.originalWidth
  
  const { 
        title: defaultTitle, 
        description: defaultDescription, image, siteUrl 
    } = useSiteMetadata()
  

    const seo = {
      title: title || defaultTitle,
      description: description || defaultDescription,
      image: img || fallbackImageURL || image,
      url: `${siteUrl}/${pathname || ``}`,
      imgType: imgType || fallbackFormat || ``,
      imgWidth: imgWidth || fallbackWidth || ``,
      imgHeight: imgHeight || fallbackHeight || ``,
      imgAlt: imgAlt || fallbackAltText || `No alt text available.`,
    }

  
    return (
      <>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta name="image" content={seo.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:url" content={seo.url} />
        <meta name="twitter:description" content={seo.description} />
        <meta name="twitter:image" content={seo.image} />

        <meta property="og:title" content={seo.title} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={seo.url} />
        <meta property="og:image" content={seo.image} />
        <meta property="og:image" content={seo.image} />
        <meta property="og:image:secure_url" content={seo.image} />
        <meta property="og:image:type" content={`image/${seo.imgType}`} />
        <meta property="og:image:width" content={seo.imgWidth} />
        <meta property="og:image:height" content={seo.imgHeight} />
        <meta property="og:image:alt" content={seo.imgAlt} />


        <meta property="og:description" content={seo.description} />

        {children}
      </>
    )
  }

  export default SeoBuilder