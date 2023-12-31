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

    console.log(data)
    const image = getImage(data.file.childCloudinaryAsset);
    const alt = data.file.childCloudinaryAsset.rawCloudinaryData.context.custom.alt

    return (
        <div className={container}>
            <SubpageHeader
                   image={image} 
                   alt={alt}
                   title="About Kevin Delahunt"
                   summary="I am a rural-Ottawa native who loves the big city. For fun, I go winter survival camping in snow shelters or I play almost any kind of card, video, board game or sport. I'm earnest, authentic and introspective. My three core values are growth, service and respect. I'm looking to contribute to your team's long term goals."
            />
            <div className={content}>
                <h2>Early days</h2>
                <p>I was fascinated with the internet and with digital tools from a young age. My earliest memory of computers as useful tools was when we visited my aunt in Rhode Island. We used her computer to access an Encarta entry about stick bugs. I found the information so relevant that I printed a 40 page packet to take back home. In 2005, I used Microsoft Publisher to make advertisements for my side hustle named ‘General Jobs’.  When I went to college after high school in small business management, all I knew was that I wanted to work in an office. I remember being particularly interested in my business communication class but it never connected that it could become a career. Looking back now, I can see the seeds of my current career — to use these tools to make digital solutions.</p>
                <h2>Helpful Hacks</h2>
                <p>My first exposure with digital tools and making design improvements began at a video game testing company in Montreal called Babel Media in 2013. They used Atlassian Confluence as a reference for quality assurance (QA) testers. When I started helping in recruitment for testers, I began contributing to the knowledge base by documenting our processes and efforts to recruit. I also created a QA test as a screening tool with automatic marking in Microsoft Excel, that would allow me to test 100+ candidates one summer. A couple years later at Danier Leather, I had the opportunity to <Link to="/portfolio/stock-room-organization/">reorganize an entire stock </Link>room by style number which decreased the time to locate a jacket from 15 minutes on average to seconds. I didn’t realize that designing solutions, either digitally or physically, was something I would like to do.</p>
                <h2>My first knowledge base</h2>
                <p>My first documentation project specifically designed to improve my colleague’s experience was in 2015 when I was working as a technical support agent at Mindgeek. We were supporting many different products, each with their own quirks, and it was quite difficult to help our users. We had a massive reliance on the hold button to speak with the more experienced staff. It was only their collective memory that would solve the issue. None of this experience and knowledge was documented and it would disappear with their departure. I felt that internal documentation should be written to enable access to this information while on the call and for future use. So, I spent my breaks, lunches and unpaid time before and after work to build a knowledge base. I wanted it to be easy enough to use for users on the phone, so I created an interface inside Confluence with a grid of buttons with custom icons I created in Microsoft Publisher. My goal was to make something that looked good and worked, so that the company could see its value and invest in it. They did not see the value immediately, but years later I’m told they did eventually continue the knowledge base as I had envisioned. Working on this impacted my trajectory, and I began to apply to other companies as a technical writer. I was getting closer to what I want to do: improve other people’s experiences via digital solutions.</p>
                <h2>A valuable understanding</h2>
                <p>After two years as a technical support agent at Lightspeed, I was able to leverage my product knowledge to become a technical writer. This seemed like a great step towards creating digital solutions. I worked alongside designers and developers who created new features and my job was to explain how to use them. The most rewarding part of my job was to see the impact my solution created for my target audience, which were my colleagues in the case of <Link to="/portfolio/help-center-solution">Efficient Help Centre Translations</Link>. As satisfying as it was to explain complicated features, I couldn’t help wanting to design improved features instead. I chose to leave the company and attend a design program to learn how to do that.</p>
                <h2>Learning Constantly</h2>
                <p>I was a casual user of digital tools throughout my career, until the Interactive Media Design program brought me to the next level. Like a kid in a candy store, I soaked up every single detail, challenge, and lesson in each of my courses. I’ve never been a great student but here I excelled. I found new skills that I could use to create solutions on top of writing. It turns out I really love to write front-end code, even in JavaScript which I have always previously avoided. I also had the opportunity to learn things I’ve never known: Design theory, photography with a DSLR, and film. I had the opportunity to lead the launch of a live client’s WordPress website in 10 weeks. Now graduated, I have been empowered with so many more tools than I had before. I understand how to create functional yet aesthetically pleasing solutions. It's time to continue on my path of creating great digital solutions.</p>
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