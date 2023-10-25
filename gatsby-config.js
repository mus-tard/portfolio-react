/**
 * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `Kev D's Portfolio`,
    description: `Showcasing past projects to demonstrate my strengths.`,
    image: `/Portrait-2-512-center.png`,
    siteUrl: `https://kevd.design`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-mdx`,

    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },

    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'portfolio',
        path: `${__dirname}/portfolio`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/icon.png"
      }
    },

    {
      resolve: 'gatsby-source-cloudinary',
      options: {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME,
        apiKey: process.env.CLOUDINARY_API_KEY,
        apiSecret: process.env.CLOUDINARY_API_SECRET,
        resourceType: 'image',
        context: true,
        tags: true,
        prefix: 'gatsby-cloudinary/'
      }
    },

    {
      resolve: 'gatsby-transformer-cloudinary',
      options: {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME,
        apiKey: process.env.CLOUDINARY_API_KEY,
        apiSecret: process.env.CLOUDINARY_API_SECRET,

        // This folder will be created if it doesn’t exist.
        uploadFolder: 'gatsby-cloudinary',
        transformTypes: [`CloudinaryMedia`, 'CloudinaryAsset']

      },
    },
  
    
  ],
}
