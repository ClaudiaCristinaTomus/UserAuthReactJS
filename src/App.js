
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Services from './components/Services';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Services/>
    </div>
  );
}

export default App;
