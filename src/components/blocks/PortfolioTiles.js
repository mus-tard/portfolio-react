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
            parent {
              ... on File {
                modifiedTime(formatString: "MMMM D, YYYY")
              }
            }
            frontmatter {
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
                        <Link to={`/portfolio/${node.frontmatter.slug}`}>
                            <div className={tileContainer} key={node.id}>
                                <Tile
                                    label = {node.frontmatter.title}
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