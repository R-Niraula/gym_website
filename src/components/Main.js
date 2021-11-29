import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import About from './About'
import Services from './Services'
import Fees from './Fees'
import Footer from './Footer'
import Gallery from './Gallery'
import { Route, Routes } from 'react-router-dom';
import Home from './Home'
import SimpleReactLightbox from 'simple-react-lightbox'
import Contact from './Contact'


const Main = () => {
    return (
        <>
         <Navbar />   
         <SimpleReactLightbox>
           <Routes>
             <Route exact path="/" element={<Home />} />
             <Route exact path="/gallery" element={<Gallery />} />
             <Route exact path="/contact" element={<Contact />} />
           </Routes>
         </SimpleReactLightbox>
         <Footer />
        </>
    )
}

export default Main
