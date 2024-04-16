import {useState} from 'react'
import { BrowserRouter as Router, Route,  Routes, Link } from 'react-router-dom';
import Bookmark from './Components/Bookmark';
import DialogBox from './Components/DialogBox';
import SearchBar from './Components/SearchBar';
import './index.css'
import Home from './Pages/Home';
import Footer from './Components/Footer';
function App() {
 

  return (
      // <Router>
      //   <Routes>
      //     <Route  path="/" element={<SearchBar/>} />
      //     <Route  path="/bookmark" element={<Bookmark/>} />
      //    </Routes>
      // </Router>
      <>
      <Footer/>
      </>
     
  );
}

export default App;
