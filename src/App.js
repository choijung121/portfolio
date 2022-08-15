import './App.css';
import About from './component/about'
import Experience from './component/experience';
import Project from './component/project';
import Contact from './component/contact';
import Navbar from './navbar/navbar';
import Home from './component/home';
import Card from './component/card';
import "bootstrap/dist/css/bootstrap.min.css";
// import { Card } from 'react-bootstrap';

function App() {
  return (
    <div>
      <Navbar/>
      <Home />
      <About/>
      <Experience/>
      <Project/>
      <Card/>
      <Contact/>
    </div>
  );
};

export default App;
