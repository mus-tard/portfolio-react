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
        allMdx(sort: {frontmatter: {priority: DESC}}) {
          nodes {
            frontmatter {
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
              title
              slug
            }
            id
          }
        }
      }
`
)


    return(
        <div className={container}>
            <h2>
                Case Studies
            </h2>
            <div className={tileGrid}>
                {
                    data.allMdx.nodes.map(node => (
                        <Link to={`/portfolio/${node.frontmatter.slug}`} key={node.id}>
                            <div className={tileContainer} >
                                <Tile
                                    label = {node.frontmatter.title}
                                    img = {node.frontmatter.hero_image.childCloudinaryAsset}
                                    alt = {node.frontmatter.hero_image.childCloudinaryAsset.rawCloudinaryData.context.custom.alt}
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