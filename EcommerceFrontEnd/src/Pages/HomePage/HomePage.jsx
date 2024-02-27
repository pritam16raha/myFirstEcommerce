//import React from 'react'
import AnnounceMent from '../../Components/Announcement/AnnounceMent'
import Category from '../../Components/Categories/Category'
import Footer from '../../Components/Footer/Footer'
import NavBar from '../../Components/NavBar/NavBar'
import NewsLetter from '../../Components/NewsLetter/NewsLetter'
import MultipleProductComponent from '../../Components/Product/MultipleProductComponent'
import Slider from '../../Components/Slider/Slider'



const HomePage = () => {
  return (

    <>
        <AnnounceMent />
        <NavBar />
        <Slider />
        <Category />
        <MultipleProductComponent />
        <NewsLetter />
        <Footer /> 
    
    </>
  )
}



export default HomePage;