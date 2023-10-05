import React from 'react';
import { Link } from "gatsby"
import Hambutton from '../buttons/HamButton'


import 
    {   
        navMenu,
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
    <nav>
        <div className={logoAndHam}>
            <div className={logoContainer}>
                <GatsbyImage image={image} alt={altText}/>
            </div>
            <div>
                <Hambutton
                    isOpen={isOpen}
                    handleClick = {handleClick}
                />
            </div>
        </div>
        <div className={`${navMenu} ${isOpen && mobileVisible}`}>
            <Link to="/about" onClick={handleClick}>About</Link>
            <Link to="/resume" onClick={handleClick}>Resume</Link>
            <Link to="/contact" onClick={handleClick}>Contact</Link>
        </div>
    </nav>
    
  );
}

export default Nav