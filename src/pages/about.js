import React from 'react'
import { graphql } from 'gatsby'
import { getImage } from 'gatsby-plugin-image';
import AboutContent from '../../about/index.mdx'
import { 
    content,
    container,
    
   } from './portfolio/mdxStyles.module.css'

import SubpageHeader from '../components/blocks/SubpageHeader';

function About({data}) {

    console.log(data)

    const image = getImage(data.mdx.frontmatter.hero_image.childCloudinaryAsset);
    const alt = data.mdx.frontmatter.hero_image.childCloudinaryAsset.rawCloudinaryData.context.custom.alt
    const pgTitle = data.mdx.frontmatter.title
    const pgSummary = data.mdx.frontmatter.summary

    return (
        <div className={container}>
            <SubpageHeader
                   image={image} 
                   alt={alt}
                   title={pgTitle}
                   summary={pgSummary}
            />
            <div className={content}>
                <AboutContent />
            </div>
        </div>
        
    )
}


export const query = graphql`
query {
    mdx(id: {eq: "9db24596-d81c-54b6-8ce4-e2f4bf988112"}) {
      frontmatter {
        title
        summary
        hero_image {
          childCloudinaryAsset {
            gatsbyImageData
            rawCloudinaryData {
              context {
                custom {
                  alt
                }
              }
            }
          }
        }
      }
    }
  }`

export default About

export const Head = () => <title>About</title>