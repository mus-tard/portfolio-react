
import * as React from 'react'
import { graphql } from 'gatsby'
import { container } from './{mdx.frontmatter__slug}.module.css'

const PortfolioItem = ( {data, children} ) => {
    return (
      <div className={container}>
        {children}
      </div>
    )
  }

  export const query = graphql`
    query MyQuery($id: String) {
      mdx(id: { eq: $id }) {
        frontmatter {
          title
        }
      }
    }
  `

  export default PortfolioItem