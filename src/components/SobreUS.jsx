import React from 'react';
import { FaEnvelope, FaGithub } from "react-icons/fa";
import '../App.css';

const categories = [
  {
    title: "Mecánica",
    members: [
      { name: "Adan Miguel Pineda Botello", email: "pinedaadan819@gmail.com", image: "./adan.jpg", github: "https://github.com/adan" },
      { name: "Renata", email: "@example.com", image: "/assets/renata.jpg", github: "https://github.com/renata" },
      { name: "Leo", email: "@example.com", image: "/assets/leo.jpg", github: "https://github.com/leo" },
      { name: "Betzy", email: "@example.com", image: "/assets/betzy.jpg", github: "https://github.com/betzy" },
      { name: "Daniel", email: "@example.com", image: "/assets/daniel.jpg", github: "https://github.com/daniel" }
    ]
  },
  {
    title: "Desarrollo de Software",
    members: [
      { name: "Adan Miguel Pineda Botello", email: "pinedaadan819@gmail.com", image: "adan.jpg", github: "https://github.com/adan" },
      { name: "Renata", email: "@example.com", image: "/assets/renata.jpg", github: "https://github.com/renata" },
      { name: "Leo", email: "@example.com", image: "/assets/leo.jpg", github: "https://github.com/leo" },
      { name: "Betzy", email: "@example.com", image: "/assets/betzy.jpg", github: "https://github.com/betzy" },
      { name: "Daniel", email: "@example.com", image: "/assets/daniel.jpg", github: "https://github.com/daniel" }
    ]
  },
  {
    title: "Entornos Virtuales",
    members: [
      { name: "Adan Miguel Pineda Botello", email: "pinedaadan819@gmail.com", image: "/assets/adan.jpg", github: "https://github.com/adan" },
      { name: "Renata", email: "@example.com", image: "/assets/renata.jpg", github: "https://github.com/renata" },
      { name: "Leo", email: "@example.com", image: "/assets/leo.jpg", github: "https://github.com/leo" },
      { name: "Betzy", email: "@example.com", image: "/assets/betzy.jpg", github: "https://github.com/betzy" },
      { name: "Daniel", email: "@example.com", image: "/assets/daniel.jpg", github: "https://github.com/daniel" }
    ]
  }
];

export default function AboutUs() {
  return (
    <div className="sobre-us-container" id='Sobrenosotros'>
      <br /><br />
      <h2 className="sobre-us-title" id='titulous'>Sobre Nosotros</h2>
      <div className="team-grid">
        {categories.map((category, index) => (
          <div key={index} className="team-card">
            <h3>{category.title}</h3>
            {category.members.map((member, idx) => (
              <div key={idx} className="member-card">
                <img src={member.image} alt={member.name} />
                <h4>{member.name}</h4>
                <p><FaEnvelope /> {member.email}</p>
                <a href={member.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub /> Repositorio
                </a>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
