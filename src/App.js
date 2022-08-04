import './App.css';
import About from './component/about'
import Experience from './component/experience';
import Project from './component/project';
import Contact from './component/contact';
import Navbar from './navbar/navbar';
import Home from './component/home';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Navbar/>
      <Home />
      <About/>
      <Experience/>
      <Project/>
      <Contact/>
    </div>
  );
};

export default App;
