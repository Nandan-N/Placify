import React, { useState } from 'react';

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('aboutSection');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  const linkStyle = {
    cursor: 'pointer',
    color: isHovered ? '#00df9a' : 'white',
  };

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-44 text-white'>
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Placement Tracker.</h1>
      <ul className='flex'>
        <li
          className='p-4'
          onClick={scrollToAbout}
          onMouseEnter={handleHover}
          onMouseLeave={handleHover}
          style={linkStyle}
        >
          About
        </li>
        <li className='p-4'>Contact</li>
      </ul>
    </div>
  );
}

export default Navbar;
