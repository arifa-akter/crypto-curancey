import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Contact = () => {
    return (
        <div className='container mx-auto'>
           <div className="">
           <div className="pt-20">
                <h1 className='text-center text-xl md:text-3xl font-mono '>Contact Us, Our Office Address Down Below</h1>
                <div className="flex justify-center items-center mt-5">
                    <Link className='bg-sky-300 text-sky-700 py-3 px-3 text-xl font-sans font-bold mr-3' to="BdAddress">BD address</Link>
                    <Link className='bg-sky-300 text-sky-700 py-3 px-3 text-xl font-sans font-bold' to="usAddress">US address</Link>
                </div>
            </div>
            <div className="my-20 mr-5 ml-5 h-[50vh] flex justify-center items-center">
                <Outlet></Outlet>
            </div>
           </div>
        </div>
    );
};

export default Contact;