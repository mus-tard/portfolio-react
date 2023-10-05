import "./src/styles/reset.css"
import "./src/styles/global.css"
import '@fontsource/fira-sans/600.css'
import React from 'react'
import Layout from './src/components/layout/Layout'

export const wrapPageElement = ({ element, props }) => {
    return <Layout {...props}>{element}</Layout>
  }