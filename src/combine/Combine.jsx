import React from 'react'
import { Header } from '../components/Header'
import {Element} from 'react-scroll';
import Footer from '../components/Footer'
import Home from '../pages/Home'
import About from '../pages/About'
import Skills from '../pages/Skills'
import Experience from '../pages/Experience'
import Projects from '../pages/Projects'


 const CombineNew = () => {

  return (
    <>
     <Header />

       <Home/>
       <Element name="About">
        <About/>
        </Element>
        <Element name="Skills">
        <Skills/>
        </Element>
        <Element name="Experience">
        <Experience/>
        </Element>
        <Element name="Projects">
        <Projects/> 
        </Element>
        <Element name="Contact">
     <Footer/>
     </Element>
    </>
  )
}


export default CombineNew