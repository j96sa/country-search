import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

export default function CountrieCard({countrie,e}) {
  const navigate = useNavigate();
  const location = useLocation();
  
  const clickHandler = ()=>{
    (location.pathname!=="/favorite-list")      
    ?navigate(`/countrie/${countrie.name.common}`)
    :navigate(`/favorite-list/${countrie.ccn3}`);      
  };

  return (
    <>      
      <div className="countrie_card" onClick={()=>clickHandler()}>
        <figure>
            <img src={countrie.flags.png} alt={countrie.name.common} />
        </figure>
        <h2>{countrie.name.common}</h2>
        </div>     
    </>
  )
}
