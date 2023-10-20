
import * as React from 'react'
import { graphql } from 'gatsby'
import { 
  content,
  container,
  
 } from './mdxStyles.module.css'
import { getImage } from 'gatsby-plugin-image';
import SubpageHeader from '../../components/blocks/SubpageHeader';

const PortfolioItem = ( {data, children} ) => {
  const image = getImage(data.file.childmdx.frontmatter.hero_image.childCloudinaryAsset);
  const alt = data.file.childmdx.frontmatter.hero_image.childCloudinaryAsset.rawCloudinaryData.context.custom.alt
  const pgTitle = data.file.childmdx.frontmatter.title
  const pgSummary = data.file.childmdx.frontmatter.summary

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
    file(sourceInstanceName: {eq: "portfolio"}, id: {eq: $id}) {
      id
      childMdx {
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
  }
  `

  export default PortfolioItem

  export const Head = ({ data }) => <title>{data.mdx.frontmatter.title}</title>