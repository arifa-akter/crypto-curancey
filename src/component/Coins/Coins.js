import React, { useEffect, useState } from 'react';
import CoinCard from '../CoinCard/CoinCard';

const Coins = () => {
    const[coins, setCoins]=useState([])
    useEffect(()=>{
        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false')
        .then(response=>response.json())
        .then(data=>{
            setCoins(data)
            console.log(data)
        })
    },[])
    return (
        <div classNAme=""> 
           <div className="text-center text-3xl text-sky-700 font-bold py-6">
              <h1> Available Crypto Currencies</h1>
               <span className='text-center text-xl font-normal text-sky-700'> Total coins : {coins.length}</span>
            </div>
            <div className=" my-10 container mx-auto grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
                {
                 coins.map(coin=><CoinCard
                 key={coin.id}
                 coin={coin}
                 ></CoinCard>)
                }
            </div>
        </div>
    );
};

export default Coins;