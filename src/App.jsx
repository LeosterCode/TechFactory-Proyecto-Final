import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header';
import Footer from './components/Footer';
// import SobreUs from './components/SobreUS';

function App() {
  

  return (
    <>
    <Navbar/>
    {/* <Routes>
      <Route path="/SobreUs" element={<SobreUs />} />
    </Routes> */}
    <Header/>
    <section className='vh-100'></section>
    <Footer/>
    </>
  )
}

export default App
