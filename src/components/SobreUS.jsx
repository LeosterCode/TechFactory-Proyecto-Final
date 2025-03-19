import React from 'react';
import { FaEnvelope, FaGithub, FaPhone } from "react-icons/fa";
import '../App.css';

const categories = [
  {
    title: "Metal Mecánica",
    borderColor: "#FFD700",
    members: [
      { name: "Emilio Alonso Martinez Mata", email: "emilioalonso846@gmail.com", image: "emilio.jpg", telefono: "+52 844-276-4420" },
      { name: "Alexis Adair Hernández", email: "alexhdz319@gmail.com", image: "alex.jpg", telefono: "+52 844-120-4459" },
      { name: "Leo", email: "@gmail.com", image: ".jpg", telefono: "+52 844-120-4459" },
      { name: "Betzy", email: "@gmail.com", image: "/assets/betzy.jpg", github: "https://github.com/betzy" },
      { name: "Daniel", email: "@gmail.com", image: "/assets/daniel.jpg", github: "https://github.com/daniel" }
    ]
  },
  {
    title: "Desarrollo de Software",
    borderColor: "#40E0D0",
    members: [
      { name: "Adan Miguel Pineda Botello", email: "pinedaadan819@gmail.com", image: "adan.jpg", github: "https://github.com/AdanCodi", telefono: "+52 844-224-2953" },
      { name: "María Renata Reyes Medina", email: "mrenatareyes369@gmail.com", image: "renata.jpg", github: "https://github.com/renatarm1", telefono: "+52 811-098-7654"},
      { name: "Leonardo Sotero Nuñez Ortiz", email: "leosternunez@gmail.com", image: "leo.jpg", telefono: "+52 844-307-5960", github: "https://github.com/LeosterCode" },
      { name: "Betzy", email: "@example.com", image: "/assets/betzy.jpg", github: "https://github.com/betzy" },
      { name: "Daniel Eduardo Ortiz Ortega", email: "haisky98@gmail.com", image: "daniel.jpg", telefono: "+52 814-603-1330" }
    ]
  },
  {
    title: "Entornos Virtuales y Negocios Digitales",
    borderColor: "#FFD700",
    members: [
      { name: "Luis Fernando Moreno Aguilar", email: "19040135@alumno.utc.edu.mx", image: "fernan.jpg", telefono: "+52 844-273-5482" },
      { name: "Juan Antonio De Jesús Gonzales Rangel", email: "gonzalesrangeljuanantonio1@gmail.com", image: "juan.jpg", telefono: "+52 844-148-3076" },
      { name: "Sergio Luis Dávila Tovar", email: "sergiodavilatovar@gmail.com", image: "sergio.jpg", telefono: "+52 844-451-8308" },
    ]
  }
];

export default function AboutUs() {
  return (
    <div className="sobre-us-container" id='Sobrenosotros'>
      <br /><br />
      <center><h2 className="sobre-us-title" id='titulous'>Integrantes</h2></center>
      <div className="team-grid">
      {categories.map((category, index) => (
        <div 
          key={index} 
          className="team-card" 
          style={{ 
            border: `2px solid ${category.borderColor}`, 
            backgroundColor: 'rgba(94, 74, 74, 0)', 
            padding: '20px', 
            borderRadius: '15px', 
            marginBottom: '20px' 
          }}
        >
            <h3>{category.title}</h3>
            {category.members.map((member, idx) => (
              <div key={idx} className="member-card text-light" style={{ marginBottom: '10px' }}>
                <img src={member.image} alt={member.name} style={{ borderRadius: '15px', width: '100px', height: '100px', border: `2px solid ${category.borderColor}` }} />
                <h4>{member.name}</h4>
                <p><FaEnvelope /> {member.email}</p>
                {member.github && (
                <a href={member.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub /> Repositorio
                </a>
              )}
              {member.telefono && (
                <p><FaPhone /> {member.telefono}</p>
              )}

                <hr style={{ margin: '10px 0', borderColor: category.borderColor, borderWidth: '5px' }} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
