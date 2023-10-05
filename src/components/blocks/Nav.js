import React from 'react';
import { Link } from "gatsby"
import Hambutton from '../buttons/HamButton'


import 
    {   
        ham,
        active,
        navMenu,
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

    function handleDelayedClick() {
      setTimeout(() => {setIsOpen(!isOpen)},500)
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
        <div className={`${navMenu} ${isOpen && window.innerWidth < 700 && mobileVisible}`}>
            <Link 
              to="/about" 
              onClick={handleDelayedClick}
              activeClassName={active}
            > About</Link>
            <Link 
              to="/resume" 
              onClick={handleDelayedClick}
              activeClassName={active}
            >Resume</Link>
            <Link 
              to="/contact" 
              onClick={handleDelayedClick}
              activeClassName={active}
            >Contact</Link>
        </div>
    </nav>
    
  );
}

export default Nav