import React from 'react'
import './Home.css'
import img from './image/banner.jpg'
import { Link } from 'react-router-dom'
import img6 from './image/Screenshot 2025-01-26 153955.png'



function Home() {
  return (
    <div className='home'>

      
      
       <img src={img} className="banner" />

       <h1 className="banner-text">Your security our expertise, safeguarding people, property and assets.</h1>

       <div className="text-one">
        <h1 className='one'>We provide security solutions for
        individuals and business.</h1>

        <h1 className='two'>At STN Security Services we provide ⬇️</h1>

        <h1 className="three">✅ Door Supervisor</h1>
        <h1 className="three">✅ Events Security</h1>
        <h1 className="three">✅ Manned Security</h1>
        <h1 className="three">✅ Support security</h1>
       </div>
   
       <Link to="/client">
       <div className="four">
        <button>Check our Services</button>
       </div>
       </Link>

       

       <img src={img6}  className="homelogos-one" />


    
       <div className='touch'>
      <h3 className='quote'>Needing A Quote</h3>
      <p className="quote-text">Contact our security experts now to discuss your security requirements and get a quote from us</p>
      <Link to="/contact" className='sp about'>
    <button className='so'>Get In Touch</button>
    </Link>
    </div>


      
    </div>
  )
}

export default Home