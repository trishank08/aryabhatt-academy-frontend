import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Form  from '../Components/Form'
import Contact from '../Components/Contact' 
import Imgsection from '../Components/Imgsection'
import Fixed  from '../Components/Fixed'


export const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Form />
      <Imgsection/>
      <Contact/>
      <Fixed/>
      
    </div>
  )
}
export default Home