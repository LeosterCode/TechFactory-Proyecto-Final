import React from 'react'
import logoUtc from '../assets/LogoUtc.svg'


export default function Footer() {
  return (
    <footer className='container-fluid p-5'>
      <div className="row">
        <div className="col-md-4 col-12">
          <h4 className='text-gradiant'>TechFactory</h4>
          <p className='text-light'>Desarrollo como proyecto escolar de la <br /><strong>Universidad Tecnologica de Coahuila</strong>. </p>

        </div>
        <div className="col-md-4 col-12 text-center">
          <img className='logoUtc' src={logoUtc} alt="Logo de la UTC" />
        </div>
        <div className="col-md-4 col-12">

        </div>
      </div>

    </footer>
  )
}
