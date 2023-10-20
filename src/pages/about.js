import React from 'react';
import { graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import AboutContent from '../../about';
import { 
    content,
    container,
    
   } from './portfolio/mdxStyles.module.css';

import SubpageHeader from '../components/blocks/SubpageHeader';

function About({data}) {

    console.log(data)
    // const image = getImage(data.file.childrenCloudinaryAsset);
    // const alt = data.file.childrenCloudinaryAsset.rawCloudinaryData.context.custom.alt
    // const alt = "An portrait illustration of Kevin Delahunt smiling1."

    return (
        <div className={container}>
            {/* <SubpageHeader
                   image={image} 
                   alt={alt}
                   title="About Kevin Delahunt"
                   summary="I am a rural-Ottawa native who loves the big city. For fun, I go winter survival camping in snow shelters or I play almost any kind of card, video, board game or sport. I'm earnest, authentic and introspective. My three core values are growth, service and respect. I'm looking to contribute to your team's long term goals."
            /> */}
            <div className={content}>
                <AboutContent />
            </div>
        </div>
        
    )
}


export const query = graphql`
    query {
        file(name: {eq: "Portrait-2.1"}) {
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
    }
`

export default About

export const Head = () => <title>About Kevin Delahunt</title>