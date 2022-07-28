import {React} from 'react';
import './App.css';
// import navBar from './components/nav-bar.js'
import { Routes, Route } from 'react-router-dom';
import {NavBar} from './components';
import {Home, Experience, Education, Contact} from './pages';

function App() {
  return (
    // <div className="App">
    //   <navBar/>
    //   <header className="App-header">
        
    //     <code>Hi there! I'm Zhi Ying, or Torri :)</code>
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div className="px-9 py-4">
      
      <NavBar/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/education" element={<Education />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
