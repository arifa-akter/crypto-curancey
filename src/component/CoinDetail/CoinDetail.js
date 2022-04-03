import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CoinDetail = () => {
    const[coinsDetail , setCoinsDetail]=useState({})
    const{id} = useParams()
    useEffect(()=>{
        fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
        .then(response=>response.json())
        .then(data=>{
            console.log(data)
            setCoinsDetail(data)
        })
    },[id])
    return (
        <div className='container mx-auto'>
            <div className=" h-full py-24 grid grid-cols-1 md:grid-cols-2 gap-9">
                <div className="pl-5 order-2 md:order-1">
                    <h1 className='text-3xl'>General Info</h1>
                    <hr/>
                    <h1>coin name: {coinsDetail.name}</h1>
                    <h1>Market Cap Rank: {coinsDetail.market_cap_rank}</h1>
                    <h1>Origin: {coinsDetail.country_origin?coinsDetail.country_origin:'Not available'}</h1>
                    <h1>Contact Address : {coinsDetail.contract_address}</h1>
                    <h1>Hashing Algorithm : {coinsDetail.hashing_algorithm?coinsDetail.hashing_algorithm:'Not available'}</h1>
                    <h1>General Data : {coinsDetail.genesis_date?coinsDetail.genesis_date:'not available'}</h1>
                    <h1>Last upDated: {coinsDetail.last_updated}</h1>
                    <h1 className='text-3xl mt-4'>Score</h1>
                    <hr/>
                    <h1>Community Score : {coinsDetail.community_score}</h1>
                    <h1>Developer Score: {coinsDetail.developer_score}</h1>
                    <h1>Liquidity Score :{coinsDetail.liquidity_score}</h1>
                    <h1>public interest Score: {coinsDetail.public_interest_score}</h1>
                </div>
                <div className="flex order-1 md:order-2
                 justify-center items-center">
                  <img className='h-50 w-50' src={coinsDetail?.image?.large} alt="" />
                 </div>
            </div>
        </div>
    );
};

export default CoinDetail;