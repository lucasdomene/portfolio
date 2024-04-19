import React from 'react';
import Logo from '../assets/logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function NavBar() {
  const menuItems = ['Home', 'About', 'Skills', 'Work', 'Contact'];

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-primary text-gray-300">
      {/* Logo */}
      <div>
        <img src={Logo} alt="logo" className="w-12" />
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 cursor-pointer">
        {menuItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      {/* Hamburguer */}
      <div className="md:hidden z-10">
        <FaBars />
      </div>

      {/* Mobile Menu */}
      <ul className="md:hidden absolute top-0 left-0 w-full h-screen bg-primary flex flex-col justify-center items-center gap-14">
        {menuItems.map((item) => (
          <li className="text-4xl" key={item}>
            {item}
          </li>
        ))}
      </ul>

      {/* Social Icons */}
    </div>
  );
}
