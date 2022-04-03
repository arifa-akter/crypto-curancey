import React from 'react';
import { Link } from 'react-router-dom';

const CoinCard = ({coin}) => {
    const{ id ,name ,image ,symbol } = coin
    return (
      <Link to={`/coins-Detail/${id}`}>
        <div className= 'shadow-lg rounded-lg  py-6 px-5 flex bg-sky-100 w-[300px] justify-between items-center mb-5'>
           <div className="h-16 w-16">
           <img src={image} alt="coin" />
           </div>
           <div className="text-neutral-500">
           <h1>{name}</h1>
           <h1>{symbol}</h1>
           </div> 
        </div>
      </Link>
    );
};

export default CoinCard;