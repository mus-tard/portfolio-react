
import * as React from 'react'
import { graphql } from 'gatsby'
import { 
  content,
  container,
  
 } from './mdxStyles.module.css'
import { getImage } from 'gatsby-plugin-image';
import PortfolioItemHeader from '../../components/blocks/PortfolioItemHeader';

const PortfolioItem = ( {data, children} ) => {
  const image = getImage(data.mdx.frontmatter.hero_image.childCloudinaryAsset);
  const alt = data.mdx.frontmatter.hero_image.childCloudinaryAsset.rawCloudinaryData.context.custom.alt
  const pgTitle = data.mdx.frontmatter.title
  const pgSummary = data.mdx.frontmatter.summary

    return (
      <div className={container}>
        <PortfolioItemHeader
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
          }
        }
      }
    }
  `

  export default PortfolioItem

  export const Head = ({ data }) => <title>{data.mdx.frontmatter.title}</title>