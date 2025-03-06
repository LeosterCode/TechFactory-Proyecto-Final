import React from 'react'
import icono from "./../assets/iconoTransparentTF.svg"

export default function Header() {
    return (
        <header className='header vh-100 d-flex flex-column justify-content-center align-items-center'>
            <div className='text-center'>
                <img src={icono} alt="Icono de TechFatory" />
                <h1 className='text-gradiant'>TechFactory</h1>
            </div>
        </header>
    )
}
