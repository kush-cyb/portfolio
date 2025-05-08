import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './Pages/About';
import Home from './Pages/Home';
import Header from './components/Header';
import Contact from './Pages/Contact';
import Services from './Pages/Services';
import Work from './Pages/Work';
import Client from './Pages/Client';
import Blog from './Pages/Blog'

const App = () => {
  return (
    <Router>
      <Header/> 
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path='/services' element={< Services/>}/>
      <Route path='/work' element={<Work/>}/>
      <Route path='/client' element={<Client/>}/>
      <Route path='/blog' element={<Blog/>}/>
      
    </Routes>
  </Router>
  );
};

export default App;
