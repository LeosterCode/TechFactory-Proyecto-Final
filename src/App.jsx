import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './App.css'
import Navbar from './components/navbar'
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  

  return (
    <>
    <Navbar/>
    <Header/>
    <section className='vh-100'></section>
    <Footer/>
    </>
  )
}

export default App
