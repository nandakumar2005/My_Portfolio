import React, { useState } from "react";
import { Menu, X, Download } from "lucide-react";
import logo from '../assets/Images/logo.jpg'; 
import myresume from '../assets/Images/myresume.pdf' 


const Navbar = ({ handleScroll, homeRef, aboutRef, skillsRef, resumeRef , projectsRef , certificatesRef }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-gray-200 dark:bg-stone-950 sticky top-0 z-50 shadow-md dark:border-slate-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-6">
        <img
          className="h-10 w-10 rounded-full object-cover cursor-pointer"
          src={logo} alt="logo" 
        />
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <a href={myresume} download="Nandakumar_Resume.pdf">
            <button
              type="button"
              className="flex flex-row items-center text-stone-950 bg-amber-400 hover:bg-amber-500 transition-all ease-in-out duration-500 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-amber-400 dark:hover:bg-amber-500 dark:focus:ring-amber-300"
            >
              Download CV
              <Download size={16} className="ml-2" />
            </button>
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded={isOpen}
          >
            <span className="sr-only">
              {isOpen ? "Close main menu" : "Open main menu"}
            </span>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
        <div
          className={`w-full md:flex md:w-auto md:order-1 ${
            isOpen ? "block" : "hidden"
          }`}
          id="navbar-cta"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 ">
            <li className="block py-2 px-3 md:p-0 text-white bg-amber-400 rounded-sm md:bg-transparent md:text-amber-600 md:dark:text-amber-400 cursor-pointer"  onClick={() => handleScroll(homeRef)}>
              
                Home
            </li>
            <li className="block py-2 px-3 md:p-0 text-slate-50  rounded-sm md:bg-transparent md:text-slate-500 md:dark:text-slate-50 hover:dark:text-amber-400 cursor-pointer" onClick={() => handleScroll(aboutRef)}>
              
                About
            </li>
            <li className="block py-2 px-3 md:p-0 text-slate-50  rounded-sm md:bg-transparent md:text-slate-500 md:dark:text-slate-50 hover:dark:text-amber-400 cursor-pointer" onClick={() => handleScroll(skillsRef)}>
              
                Skills
            </li>
            <li className="block py-2 px-3 md:p-0 text-slate-50  rounded-sm md:bg-transparent md:text-slate-500 md:dark:text-slate-50 hover:dark:text-amber-400 cursor-pointer" onClick={() => handleScroll(resumeRef)}>
                Resume
            </li>
            <li className="block py-2 px-3 md:p-0 text-slate-50  rounded-sm md:bg-transparent md:text-slate-500 md:dark:text-slate-50 hover:dark:text-amber-400 cursor-pointer" onClick={() => handleScroll(projectsRef)}>
                Projects
            </li>
            <li className="block py-2 px-3 md:p-0 text-slate-50  rounded-sm md:bg-transparent md:text-slate-500 md:dark:text-slate-50 hover:dark:text-amber-400 cursor-pointer" onClick={() => handleScroll(certificatesRef)}>
                Certificates
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
