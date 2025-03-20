import React from 'react'
import imgTF from '../assets/IconoTransparentTF.svg'
import imgUtc from '../assets/LogoUtc.svg'

export default function TechFactory() {
    return (
        <section className="container queEs p-md-5 p-1" id='queEs'>
            <div className="row align-self-center d-md-inline d-flex flex-column align-items-center">
                <h2 className='textHeader mb-md-1 mb-0'>¿Qué es TechFactory?</h2>

                <div className="footer-image col-md-12 col-10 d-flex p-md-5 p-2 justify-content-center">
                    <img className='img mx-md-5 mx-2' src={imgTF} />
                    <img className='img mx-md-5 mx-2' src={imgUtc} />
                </div>

                <div className="footer-info col-md-12 col-12 mt-md-2 mt-2">
                    <p className='text-light '>Tech Factory es un proyecto innovador que combina las carreras de Entornos Virtuales, Mecánica y Desarrollo de Software de la Universidad Autonoma de Coahuila, para crear piezas en 3D de manera colaborativa. A través de esta iniciativa interdisciplinaria, estudiantes y profesionales de estas áreas trabajan juntos para diseñar, modelar y fabricar soluciones tecnológicas de vanguardia. Nuestro objetivo es ofrecer una experiencia educativa única donde se integren el diseño y modelado 3D, la ingeniería mecánica y el desarrollo de software, con un fuerte enfoque en la innovación, la creatividad y la sostenibilidad. Teach Factory es el espacio donde las ideas se transforman en realidades tangibles, impulsadas por la tecnología y la colaboración..</p>
                </div>
            </div>
        </section>
    )
}
