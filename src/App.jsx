import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './App.css'

import Navbar from './components/Navbar'
import Header from './components/Header';
import Footer from './components/Footer';
import Photos from './components/Photos';
import SobreUs from './components/SobreUS';
import Download from './components/Download';

function App() {

  return (
    <>
      <Navbar />
      <Header />
      <SobreUs />
      <Photos /><br/>
      <Download />
      <Footer />
    </>

  )
}

export default App
