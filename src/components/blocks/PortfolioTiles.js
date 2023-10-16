import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Tile from '../elements/Tile'
import {
    tileGrid,
    container,
    tileContainer
} from './portfolioTiles.module.css'



function PortfolioTiles() {
    const data = useStaticQuery(graphql`
    query {
        allFile(filter: {sourceInstanceName: {eq: "portfolio"}}) {
            nodes {
                name
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
                    data.allFile.nodes.map(node => (
                        <div className={tileContainer} key={node.name}>
                            <Tile
                                label = {node.name}
                            />
                        </div>
                    ))
                }
                              

                
            </div>
        </div>
    )
}



export default PortfolioTiles