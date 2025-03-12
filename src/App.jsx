import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header';
import Footer from './components/Footer';
import Photos from './components/Photos';
import SobreUs from './components/SobreUS';

function App() {
  

  return (
    <>
    <Navbar/>
    <Header/>
    <section id='SobreUs'><SobreUs/> </section>
    <section className='vh-100'></section>
    <section id='photos'><Photos/> </section>
    <Footer/>
    </>
  )
}

export default App
