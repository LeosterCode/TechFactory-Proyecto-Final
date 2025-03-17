import React from 'react'
import logoUtc from '../assets/LogoUtc.svg'


export default function Footer() {
  return (
    <footer className='container-fluid p-5'>
      <div className="row">
        <div className="col-md-4 col-12">
          <h4 className='techFactory'>
            <span className='spanTech'>Tech</span>
            <span className='spanFactory'>Factory</span>
          </h4>
          <p className='text-light'>Desarrollo como proyecto escolar de la <br /><strong>Universidad Tecnologica de Coahuila</strong>. </p>

        </div>
        <div className="col-md-4 col-12 text-center">
          <img className='logoUtc' src={logoUtc} alt="Logo de la UTC" />
        </div>
        <div className="col-md-4 col-1 text-light d-flex flex-column align-items-center">
          <p className='fs-2 fw-medium'>Enlaces UTC</p>
          <div>
            <a className='nav-link fs-5' href="">
              <i class="bi bi-facebook me-2"></i>
              FaceBook</a>
            <a className='nav-link fs-5' href="">
              <i class="bi bi-instagram me-2"></i>
              Instagram</a>
            <a className='nav-link fs-5' href="">
              <i class="bi bi-browser-chrome me-2"></i>
              WebSite</a>
          </div>

        </div>
      </div>

    </footer>
  )
}
