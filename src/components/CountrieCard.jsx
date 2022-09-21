import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import EDNPOINTS from '../helpers/ENDPOINTS';
import { Fetch_Request } from '../helpers/restCountriestHTTPRequest';

export default function CountrieCard({countrie}) {
    const navigate = useNavigate();
    
    const clickHandler = ()=>{
        navigate(`/countrie/${countrie.name}`);
    };

    return (
      <>
        <div className="countrie_card" onClick={()=>clickHandler()}>
            <figure>
                <img src={countrie.flag} alt={countrie.name} />
            </figure>
            <h2>{countrie.name}</h2>
        </div>
      </>
    )
}
