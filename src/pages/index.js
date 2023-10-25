import * as React from "react"
import Hero from "../components/blocks/Hero"
import SeoBuilder from "../components/SeoBuilder"
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
    <meta name="facebook-domain-verification" content="qr9m7qkef61rvhfrgivhu2jm275y6a" />
    <SeoBuilder />
  </>
)
