import React, { useState } from 'react';
import Logo from '../assets/logo.png';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';

export default function NavBar() {
  const menuItems = ['Home', 'About', 'Skills', 'Work', 'Contact'];
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const socialData = [
    {
      name: 'Linkedin',
      icon: <FaLinkedin size={30} />,
      color: 'bg-blue-500',
    },
    {
      name: 'Github',
      icon: <FaGithub size={30} />,
      color: 'bg-gray-800',
    },
    {
      name: 'Email',
      icon: <HiOutlineMail size={30} />,
      color: 'bg-red-500',
    },
    {
      name: 'Resume',
      icon: <BsFillPersonLinesFill size={30} />,
      color: 'bg-gray-500',
    },
  ];

  function handleMenuClick() {
    setIsMenuOpened(!isMenuOpened);
  }

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-primary text-gray-300">
      {/* Logo */}
      <div>
        <img src={Logo} alt="logo" className="w-12" />
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 cursor-pointer">
        {menuItems.map((item) => (
          <li key={item}>
            <Link to={item.toLowerCase()} smooth duration={500}>
              {item}
            </Link>
          </li>
        ))}
      </ul>

      {/* Hamburguer */}
      <div className="md:hidden z-10 cursor-pointer" onClick={handleMenuClick}>
        {isMenuOpened ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile Menu */}
      {isMenuOpened && (
        <ul className="md:hidden absolute top-0 left-0 w-full h-screen bg-primary flex flex-col justify-center items-center gap-14">
          {menuItems.map((item, index) => (
            <li className="text-4xl cursor-pointer" key={index}>
              {item}
            </li>
          ))}
        </ul>
      )}

      {/* Social Icons */}
      <div className="hidden md:flex fixed flex-col top-[35%] left-0">
        <ul>
          {socialData.map((item) => (
            <li
              key={item.name}
              className={`w-[160px] h-[60px] ml-[-100px] hover:ml-0 duration-300 ease-in ${item.color} flex items-center justify-between`}
            >
              <a
                href="/"
                className="flex justify-between items-center w-full text-gray-300 mx-3"
              >
                {item.name}
                {item.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

<li className="w-[160px] h-[60px] ml-[-100px] hover:ml-0 duration-300 ease-in bg-blue-500 flex items-center justify-between">
  <a
    href="/"
    className="flex justify-between items-center w-full text-gray-300 mx-3"
  >
    Linkedin
    <FaLinkedin size={30} />
  </a>
</li>;
