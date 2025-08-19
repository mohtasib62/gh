import React from 'react'
import Header from './Header'
import { BrowserRouter,
  Routes,
  Route
    } from 'react-router-dom';
  import About from './About';
import Client from './Client';
import Home from './Home';
import Footer from './Footer'
import Recruitment from './Recruitment';
import Policies from './Policies'
import Contact from './Contact' 
import Jobs from './Jobs';
import Submit from './Submit'
import Manager from './Manager';
import Account from './Account';
import Business from './Business';
import Three from './Three';
import Develop from './Develop';





function App() {
  return (
   <BrowserRouter>
   <Header />
   <div className="app">
   <Routes>
    <Route path='/' element={<Home />}></Route>
   </Routes>
   </div>
   <Footer />
   </BrowserRouter>
  )
}

export default App