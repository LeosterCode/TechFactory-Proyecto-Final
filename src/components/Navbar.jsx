import React, { useState, useEffect } from 'react'

import { Link } from "react-router-dom";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handlescroll = () => {

            setScrolled(window.scrollY > 100)
        }


        window.addEventListener('scroll', handlescroll);
        return () => window.removeEventListener('scroll', handlescroll);
    }, []);
    return (
        <nav className={`navbar navbar-expand-sm fixed-top navbar-light ${scrolled ? 'nav-abajo' : ''}`}>
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarID"
                    aria-controls="navbarID" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarID">
                    <div className="navbar-nav mx-auto">
                        <a className="nav-link mx-5
                           " href="/SobreUs">Sobre Nosotros</a>
                        <a className="nav-link mx-5
                           " href="#">Que es TechFactory</a>
                        <Link className='nav-link mx-5' to="/download">Descargar</Link>
                        <a className="nav-link mx-5
                           " href="#">Instruccionnes de uso</a>
                    </div>
                </div>
            </div>
        </nav>


    )
}
