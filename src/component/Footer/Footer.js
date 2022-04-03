import { faAnchorCircleCheck, faDesktopAlt, faFaceDizzy, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Footer.css'
import React from 'react';

const Footer = () => {
    return (
        <div className='bg-sky-100'>
            <div className=" flex flex-col justify-center items-center h-[40vh] md:h-[20vh]">
               <div className="flex">
               <FontAwesomeIcon className='icon mr-4' FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
               <FontAwesomeIcon className='icon mr-4' FontAwesomeIcon icon={faFaceDizzy}></FontAwesomeIcon>
               <FontAwesomeIcon className='icon mr-4' FontAwesomeIcon icon={faDesktopAlt}></FontAwesomeIcon>
               <FontAwesomeIcon className='icon mr-4' FontAwesomeIcon icon={faAnchorCircleCheck}></FontAwesomeIcon>
               </div>
               <h1 className='text-center font-mono md:text-2xl md:mt-3'> All Rights Reserved By &copy; Crypto Cafe | 2022-2026</h1>
            </div>
            
        </div>
    );
};

export default Footer;