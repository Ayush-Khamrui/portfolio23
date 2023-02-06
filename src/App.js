import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import About from './components/about/About';
import Experience from './components/experience/Experience';


function App() {

  return (
    <div className="App">
      <Navbar/>
      <About/>
      <Experience/>
    </div>
  );
}

export default App;
