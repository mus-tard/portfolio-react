import * as React from "react"
import Hero from "../components/blocks/Hero"
import { SEO } from "../components/seo"
import PortfolioTiles from "../components/blocks/PortfolioTiles"



const IndexPage = () => {

  return (
    <>
      <Hero />
      <PortfolioTiles />
    </>
      

  )
}

export default IndexPage

export const Head = () => (
  <>
    <title>Kev's Portfolio</title>
    <SEO />
  </>
)
