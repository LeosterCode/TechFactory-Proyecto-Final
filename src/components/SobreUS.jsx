import React from 'react';
import { FaPhone, FaEnvelope, FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import '../App.css';


const teamMembers = [
  {
    name: "Adan Miguel Pineda Botello",
    role: "Desarrollador de Software Multiplataforma",
    quote: "Si puedes soñarlo, puedes hacerlo.",
    phone: "+52 844-224-2953",
    email: "pinedaadan819@gmail.com",
    facebook: "https://facebook.com/adan",
    instagram: "https://instagram.com/adan",
    tiktok: "https://tiktok.com/@adan",
    image: "adan.jpg"
  },
  {
    name: "Renata",
    role: "Desarrollador de Software Multiplataforma",
    quote: "Si puedes soñarlo, puedes hacerlo.",
    phone: "+52 8",
    email: "@example.com",
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    tiktok: "https://tiktok.com",
    image: "images/.jpg"
  },
  {
    name: "Leo",
    role: "Desarrollador de Software Multiplataforma",
    quote: "Si puedes soñarlo, puedes hacerlo.",
    phone: "+52 8",
    email: "@example.com",
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    tiktok: "https://tiktok.com",
    image: "images/assets/photo7.png"
  },
  {
    name: "Betzy",
    role: "Desarrollador de Software Multiplataforma",
    quote: "Si puedes soñarlo, puedes hacerlo.",
    phone: "+52 8",
    email: "@example.com",
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    tiktok: "https://tiktok.com",
    image: "images/.jpg"
  },
  {
    name: "Daniel",
    role: "Desarrollador de Software Multiplataforma",
    quote: "Si puedes soñarlo, puedes hacerlo.",
    phone: "+52 8",
    email: "@example.com",
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    tiktok: "https://tiktok.com",
    image: "images/.jpg"
  }
];

export default function AboutUs() {
  return (
<div className="sobre-us-container" id='Sobrenosotros'>
  <br /><br />
  <h2 className="sobre-us-title" id='titulous'>Sobre Nosotros</h2>
  <div className="team-grid">
    {teamMembers.map((member, index) => (
      <div key={index} className="team-card">
        <img src={member.image} alt={member.name} />
        <h3>{member.name}</h3>
        <p>{member.role}</p>
        <p>"{member.quote}"</p>
        <ul>
          <li><FaEnvelope /> {member.email}</li>
          <li><FaPhone /> {member.phone}</li>
        </ul>
        <div className="social-links">
          <a href={member.facebook} target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href={member.instagram} target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href={member.tiktok} target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
        </div>
      </div>
    ))}
  </div>
</div>

  );
}