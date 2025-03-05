import React,{useState, useEffect} from 'react'

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() =>{
        const handlescroll = ()=>{
            setScrolled(window.scrollY >100);
        };
        window.addEventListener('scroll', handlescroll);
        return () => window.removeEventListener('scroll', handlescroll);
    },[]);
    return (
           <nav className={`navbar navbar-expand-sm navbar-light bg-transparent ${scrolled ? 'bg-dark' : ''}`}>
               <div className="container-fluid">
                   <a className="navbar-brand" href="#">primary</a>
                   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarID"
                       aria-controls="navbarID" aria-expanded="false" aria-label="Toggle navigation">
                       <span className="navbar-toggler-icon"></span>
                   </button>
                   <div className="collapse navbar-collapse" id="navbarID">
                       <div className="navbar-nav">
                           <a className="nav-link active" aria-current="page" href="#">Sobre Nosotros</a>
                           <a className="nav-link active" aria-current="page" href="#">Que es TechFactory</a>
                           <a className="nav-link active" aria-current="page" href="#">Descargar</a>
                           <a className="nav-link active" aria-current="page" href="#">Instruccionnes de uso</a>
                           <a className="nav-link active" aria-current="page" href="#">Dedicatorias</a>
                       </div>
                   </div>
               </div>
           </nav>

           
    )
}
