
import * as React from 'react'
import { graphql } from 'gatsby'
import { 
  content,
  container,
  
 } from './mdxStyles.module.css'
import SeoBuilder from "../../components/SeoBuilder"
import { getImage } from 'gatsby-plugin-image';
import SubpageHeader from '../../components/blocks/SubpageHeader';

const PortfolioItem = ( {data, children} ) => {
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
          {children}
        </div>

      </div>
    )
  }

  export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        summary
        slug
        hero_image {
          childCloudinaryAsset {
            gatsbyImageData(placeholder: BLURRED)
            rawCloudinaryData {
              context {
                custom {
                  alt
                }
              }
            }
          }
          relativePath
        }
      }
    }
  }
  `

  export default PortfolioItem

  export const Head = ({ data }) => (
    <>
      <title>{data.mdx.frontmatter.title}</title>
      <SeoBuilder
        title={data.mdx.frontmatter.title}
        description={data.mdx.frontmatter.summary}
        image={data.mdx.frontmatter.hero_image.relativePath}
        pathname={`portfolio/${data.mdx.frontmatter.slug}`}
      />
    </>
  )