import React from 'react';
import { Link, graphql } from 'gatsby';
import SeoBuilder from "../components/SeoBuilder";
import { getImage } from 'gatsby-plugin-image';
import { 
    content,
    container,
    
   } from './portfolio/mdxStyles.module.css';

import SubpageHeader from '../components/blocks/SubpageHeader';

function About({data}) {

    const image = getImage(data.file.childCloudinaryAsset);
    const alt = data.file.childCloudinaryAsset.rawCloudinaryData.context.custom.alt

    return (
        <div className={container}>
            <SubpageHeader
               image={image} 
               alt={alt}
               title="A designer at heart"
               summary="About Kevin Delahunt"
            />
            <div className={content}>
                <p>Most of my experience in design has been solving problems related to systems connected to my role. My favourite experiences have been when I felt I understood a problem and was allowed to define a solution. The solutions I am most proud of are the ones where I was able to participate in implementing the solution. This happened when I was able to <Link to="/portfolio/stock-room-organization">reorganize leather jackets</Link>, or when I <Link to="/portfolio/help-center-solution">redefined the translation process</Link>. Most recently, I've solved more direct problems: "My problem is I don't have a website". I’ve recently built sites in <Link to="/portfolio/wordpress-workforce-warriors">WordPress</Link>, <Link to="/portfolio/new-theme-hubspot">HubSpot</Link> or using React. I look forward to digging more deeply into problems, user needs and data in order to iterate and design truly impactful solutions. Rather than building websites, I want to verifiably improve user experiences to meet business needs.</p>
                <p>I am seen as an earnest and authentic person who loves to provide and receive feedback. I mainly want to connect with my colleagues and participate in creating a great product. I like to invest myself in a problem-space and really explore the root cause of issues. I am known to ask unexpected questions that search for alternative perspectives and to dig deeper. I am an avid learner and love filling knowledge gaps in anything that seems worthwhile. I am a fan of how user experience design can help improve a company’s bottom line: By focusing on long term product improvements, you’re investing in your business’ reputation which has compounding effects over time. I want to build a connection with my clients and my team to make things better.</p>
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

export const Head = () => (
    <>
      <title>About Kev D.</title>
      <SeoBuilder
        title="About Kev D."
      />
    </>
  )