//import React from 'react'
import AnnounceMent from '../Announcement/AnnounceMent'
import Category from '../Categories/Category'
import Footer from '../Footer/Footer'
import NavBar from '../NavBar/NavBar'
import NewsLetter from '../NewsLetter/NewsLetter'
import Product from '../Product/MultipleProductComponent'
import Slider from '../Slider/Slider'



const HomePage = () => {
  return (

    <>
        <AnnounceMent />
        <NavBar />
        <Slider />
        <Category />
        <Product />
        <NewsLetter />
        <Footer /> 
    
    </>
  )
}



export default HomePage;