import * as React from "react"
import Layout from '../components/layout/Layout'

import Button from "../components/buttons/Button"



const IndexPage = () => {
  return (
    <Layout>
      
      <Button
        type="cta"
        label="Learn about the story of increased productivity"
      />
        <Button
        type="back"
        label="BACK"
      />
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
