import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './styles/App.css'
import Navbar from './components/Navbar'
import Header from './components/Header';
import Footer from './components/Footer';
import Photos from './components/Photos';
import SobreUs from './components/SobreUS';
import Download from "./pages/Download"; 

function App() {
  
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <section id='SobreUs'><SobreUs /></section>
            <section className='vh-100'></section>
            <section id='photos'><Photos /></section>
            <Footer />
          </>
        } />
        <Route path="/download" element={<Download />} />
      </Routes>
    </Router>
  )
}

export default App
