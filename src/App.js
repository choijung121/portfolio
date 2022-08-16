import './App.css';
import About from './component/about'
import Experience from './component/experience';
import Project from './component/project';
import Navbar from './navbar/navbar';
import Home from './component/home';
import Footer from './component/footer'
import "bootstrap/dist/css/bootstrap.min.css";
import Contact from './component/contact';


function App() {
  return (
    <div>
      <Navbar/>
      <Home />
      <About/>
      <Experience/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default App;
