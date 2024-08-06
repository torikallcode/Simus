import React, { useEffect, useState } from 'react'

export const Navbar = () => {

  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrolled2, setIsScrolled2] = useState(false);


  useEffect(() => {
    const twoScroll = () => {
      setIsScrolled2(window.scrollY > window.innerHeight * 0.95); // Update state on scroll
    }
    window.addEventListener('scroll', twoScroll);
    return () => window.removeEventListener('scroll', twoScroll); // Cleanup
  }, [isScrolled2]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0); // Update state on scroll
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll); // Cleanup
  }, [isScrolled]);

  return (
    <div className={`w-full flex justify-between p-3 fixed z-[9999] px-5 items-center xl:px-32 transition-all ease-in-out ${isScrolled ? 'bg-gray-400 shadow-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10' : 'bg-transparent'}`}>
      <h1 className={`text-putih font-bold text-2xl font-utama transition-all ease-in-out ${isScrolled2 ? 'text-raven' : ''}`}>Simus.</h1>
      {/* <svg xmlns="http://www.w3.org/2000/svg" fill={`${isScrolled ? '#222631' : '#222631'}`} width="44" height="44" viewBox="0 0 24 24"><path d="M4 6h16v2H4zm4 5h12v2H8zm5 5h7v2h-7z"></path></svg> */}
    </div>
  )
}
