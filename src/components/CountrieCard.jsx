import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

export default function CountrieCard({countrie}) {
  const navigate = useNavigate();
  const location = useLocation();

  //constante para obtener el nombre en dependencia de donde se muestre en el objeto
  const name = countrie.name.common ?countrie.name.common :countrie.name;  
  
  const clickHandler = ()=>{
    (location.pathname!=="/favorite-list")      
    ?navigate(`/countrie/${name}`)    
    :navigate(`/favorite-list/${countrie.ccn3}`);      
  };

  return (
    <>      
      <div className="countrie_card" onClick={()=>clickHandler()}>
        <figure>
            <img src={countrie.flags.png} alt={name} />
        </figure>
        <h2>{name}</h2>
        </div>     
    </>
  )
}
