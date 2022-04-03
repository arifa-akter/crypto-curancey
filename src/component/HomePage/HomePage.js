import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'

const HomePage = () => {
    return (
        <div className='px-16 py-8 bg-slate-100'>
               <div className='flex flex-col justify-center h-[80vh] items-center'>
               <h1 className='text-center font-mono font-bold text-xl md:text-5xl'>
               Welcome to CRYPTO CAFE <span className='md:text-6xl'>☕</span></h1>
               <Link to="/coins">
                   <button className=' button font-mono'>Explore icons</button>
               </Link>
               </div>
        </div>
    );
};

export default HomePage;