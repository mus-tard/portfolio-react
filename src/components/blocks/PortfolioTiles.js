import React from 'react'
import { 
    Link,
    graphql,
    useStaticQuery,
} from 'gatsby'

import Tile from '../elements/Tile'
import {
    tileGrid,
    container,
    tileContainer
} from './portfolioTiles.module.css'



function PortfolioTiles() {
    const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {sourceInstanceName: {eq: "portfolio"}}
        sort: {childMdx: {frontmatter: {priority: DESC}}}
      ) {
        nodes {
          childMdx {
            frontmatter {
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
              title
              slug
            }
            id
          }
        }
      }
    }
`
)

const portfolioArray = data.allFile.nodes

const nullFreePortfolioArray = portfolioArray.filter(node => node.childMdx !== null)

console.log(nullFreePortfolioArray)

    return(
        <div className={container}>
            <h2>
                Case Studies
            </h2>
            <div className={tileGrid}>
                {
                    nullFreePortfolioArray.map(node => (
                        <Link to={`/portfolio/${node.childMdx.frontmatter.slug}`} key={node.id}>
                            <div className={tileContainer} >
                                <Tile
                                    label = {node.childMdx.frontmatter.title}
                                    img = {node.childMdx.frontmatter.hero_image.childCloudinaryAsset}
                                    alt = {node.childMdx.frontmatter.hero_image.childCloudinaryAsset.rawCloudinaryData.context.custom.alt}
                                />
                             </div>
                        </Link>
                    ))
                }
                              

                
            </div>
        </div>
    )
}



export default PortfolioTiles