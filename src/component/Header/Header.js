import { faArrows, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    const[open, setOpen] =useState(false)
    return (
    <nav className='md:bg-sky-100 sticky top-0'>
          <div className='container mx-auto md:flex md:justify-between md:items-center md:py-6'>
            <Link to="/">
            <div className="logo text-3xl font-sans font-bold hidden md:block">
                <h1>Crypto Cafe</h1>
            </div>
            </Link>
            <div className="nav-menu bg-sky-100">
                <div  onClick={()=>setOpen(!open)}  className='md:hidden px-2 py-4'>
                 {open? <FontAwesomeIcon FontAwesomeIcon icon={faArrows}></FontAwesomeIcon> 
                 : <FontAwesomeIcon  FontAwesomeIcon icon={faBars}></FontAwesomeIcon>}
                </div>
   
         <ul className={`md:flex font-sans font-medium duration-500 ease-in md:static w-full absolute ${open?'top-9 bg-sky-100':'top-[-120px]'}`}>
               <li className='md:mr-5 text-center md:text-2xl'><CustomLink to="/">Home</CustomLink></li>
               <li className='md:mr-5 text-center md:text-2xl'><CustomLink to="/coins">Coins</CustomLink></li>
               <li className='md:mr-5 text-center md:text-2xl'><CustomLink to="/contact">Contact</CustomLink></li>
               <li className='md:mr-5 text-center md:text-2xl'><CustomLink to="/about">About</CustomLink></li>
           </ul>
      
            </div>
          </div>
    </nav>
    );
};

export default Header;