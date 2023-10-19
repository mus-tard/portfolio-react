import React from 'react'
import { Link } from "gatsby"
import Hambutton from '../buttons/HamButton'
import Pencil from '../icons/Pencil'


import 
    {   
        ham,
        active,
        navMenu,
        container,
        logoAndHam,
        linkContainer,
        logoContainer,
        mobileVisible,
        pencilContainer
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
            <Link to="/" className={logoContainer}>
                <GatsbyImage image={image} alt={altText}/>
            </Link>
            <div className={ham}>
                <Hambutton
                    isOpen={isOpen}
                    handleClick = {handleClick}
                />
            </div>
        </div>
        <div className={`${navMenu} ${isOpen && window.innerWidth < 700 && mobileVisible}`}>
            <div className={linkContainer}>
              <Link 
                to="/" 
                onClick={handleDelayedClick}
                activeClassName={active}
              >
                Home
                <div className={pencilContainer}>
                  <Pencil />
                </div>
              </Link>
            </div>
            <div className={linkContainer}>
              <Link 
                to="/about" 
                onClick={handleDelayedClick}
                activeClassName={active}
              >
                About
                <div className={pencilContainer}>
                  <Pencil />
                </div>
              </Link>

            </div>
            <div className={linkContainer}>
              <a 
                href="#contact"
                onClick={handleDelayedClick}
                activeClassName={active}
              >
                Contact
                <div className={pencilContainer}>
                  <Pencil />
                </div>
              </a>

            </div>
        </div>
    </nav>
    
  );
}

export default Nav