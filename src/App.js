import './App.css';
import About from './component/about'
import Experience from './component/experience';
import Project from './component/project';
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
    </div>
  );
};

export default App;
