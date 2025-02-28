import React from 'react'
import Navbar from './Navbar'
import MainSection from './MainSection'
import Footer from './Footer'

const Home = () => {
  return (
    <>
    <div>
    <Navbar/>
    </div>
    <div className='min-h-screen'>
    <MainSection/>
    </div>
    <div>
        <Footer/>
    </div>
    </>
  )
}

export default Home