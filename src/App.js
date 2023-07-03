import React from 'react'; 
import './App.css';
import About from './component/about/about'
import Experience from './component/experience/experience';
import Project from './component/projects/project';
import Navbar from './navbar/navbar';
import Footer from './component/footer/footer'
import Contact from './component/contact/contact';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Navbar/>
      <About/>
      <Experience/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default App;
