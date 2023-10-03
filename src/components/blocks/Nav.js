import React from 'react';
import { Link } from "gatsby"
import Hambutton from '../buttons/HamButton'


import 
    {   
        ham,
        navMenu,
        navLink,
        container,
        logoAndHam,
        logoContainer,
        mobileVisible,
    } from './nav.module.css'
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

function debounce(fn, ms) {
    let timer
    return _ => {
      clearTimeout(timer)
      timer = setTimeout(_ => {
        timer = null
        fn.apply(this, arguments)
      }, ms)
    };
  }

function Nav() {

    

    const [isOpen, setIsOpen] = React.useState(false)


    React.useEffect(()=> {
        const debouncedHandleResize = debounce(
        function handleResize() {
            setIsOpen(false)
        }, 100)

        window.addEventListener('resize', debouncedHandleResize)
        
        return _ => {
            window.removeEventListener('resize', debouncedHandleResize) 
        }
        
    },[])

   
    
    function handleClick() {
        setIsOpen(!isOpen);
    }

    const data = useStaticQuery(graphql`
    query {
      cloudinaryMedia(folder: {eq: "gatsby-cloudinary/logo"}) {
          gatsbyImageData(placeholder: BLURRED)
          context {
            custom {
              alt
            }
          }
        }
    }
  `)
    const image = getImage(data.cloudinaryMedia);
    const altText = data.cloudinaryMedia.context.custom.alt
  return (
    <nav className={container}>
        <div className={logoAndHam}>
            <div className={logoContainer}>
                <GatsbyImage image={image} alt={altText}/>
            </div>
            <div className={ham}>
                <Hambutton
                    isOpen={isOpen}
                    handleClick = {handleClick}
                />
            </div>
        </div>
        <div className={`${navMenu} ${isOpen && mobileVisible}`}>
            <Link to="/about">About</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/contact">Contact</Link>
        </div>
    </nav>
    
  );
}

export default Nav