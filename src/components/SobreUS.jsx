import React from 'react';
import { FaEnvelope, FaGithub, FaPhone } from "react-icons/fa";
import '../App.css';

const categories = [
  {
    title: "Metal Mecánica",
    borderColor: "#FFD700",
    members: [
      { name: "Emilio Alonso Martinez Mata", email: "emilioalonso846@gmail.com", image: "emilio.jpg", telefono: "+52 844-276-4420" },
      { name: "Renata", email: "@example.com", image: "/assets/renata.jpg", github: "https://github.com/renata" },
      { name: "Leo", email: "@example.com", image: "/assets/leo.jpg", github: "https://github.com/leo" },
      { name: "Betzy", email: "@example.com", image: "/assets/betzy.jpg", github: "https://github.com/betzy" },
      { name: "Daniel", email: "@example.com", image: "/assets/daniel.jpg", github: "https://github.com/daniel" }
    ]
  },
  {
    title: "Desarrollo de Software",
    borderColor: "#40E0D0",
    members: [
      { name: "Adan Miguel Pineda Botello", email: "pinedaadan819@gmail.com", image: "adan.jpg", github: "https://github.com/AdanCodi", telefono: "+52 844-224-2953" },
      { name: "Renata", email: "@example.com", image: "/assets/renata.jpg", github: "https://github.com/renata" },
      { name: "Leo", email: "@example.com", image: "/assets/leo.jpg", telefono: "+52 811-123-4567" },
      { name: "Betzy", email: "@example.com", image: "/assets/betzy.jpg", github: "https://github.com/betzy" },
      { name: "Daniel", email: "@example.com", image: "/assets/daniel.jpg", telefono: "+52 811-765-4321" }
    ]
  },
  {
    title: "Entornos Virtuales",
    borderColor: "#FFD700",
    members: [
      { name: "Adan Miguel Pineda Botello", email: "pinedaadan819@gmail.com", image: "/assets/adan.jpg", github: "https://github.com/adan" },
      { name: "Renata", email: "@example.com", image: "/assets/renata.jpg", github: "https://github.com/renata" },
      { name: "Leo", email: "@example.com", image: "/assets/leo.jpg", github: "https://github.com/leo" },
      { name: "Betzy", email: "@example.com", image: "/assets/betzy.jpg", telefono: "+52 811-098-7654" },
      { name: "Daniel", email: "@example.com", image: "/assets/daniel.jpg", github: "https://github.com/daniel" }
    ]
  }
];

export default function AboutUs() {
  return (
    <div className="sobre-us-container" id='Sobrenosotros'>
      <br /><br />
      <center><h2 className="sobre-us-title" id='titulous'>Sobre Nosotros</h2></center>
      <div className="team-grid">
        {categories.map((category, index) => (
          <div 
            key={index} 
            className="team-card" 
            style={{ border: `8px solid ${category.borderColor}`, padding: '10px', borderRadius: '10px', marginBottom: '20px' }}
          >
            <h3>{category.title}</h3>
            {category.members.map((member, idx) => (
              <div key={idx} className="member-card" style={{ marginBottom: '10px' }}>
                <img src={member.image} alt={member.name} style={{ borderRadius: '8px', width: '100px', height: '100px' }} />
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
