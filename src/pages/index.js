import * as React from "react"
import Hero from "../components/blocks/Hero"
import { Seo } from "../components/Seo"
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
    <Seo />
  </>
)
