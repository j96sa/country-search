import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

export default function CountrieCard({countrie,e}) {
  const navigate = useNavigate();
  const location = useLocation();
  
  const clickHandler = ()=>{
    if(location.pathname!=="/favorite-list"){
      countrie
      ?navigate(`/countrie/${countrie.name}`)
      :navigate(`/countrie/${e.name.common}`)
    }else{
      navigate(`/favorite-list/${countrie.nativeName}`);
    };
  };

  return (
    <>
      {
        countrie
        
        ?
        <div className="countrie_card" onClick={()=>clickHandler()}>
          <figure>
              <img src={countrie.flag} alt={countrie.name} />
          </figure>
          <h2>{countrie.name}</h2>
        </div>

        :
        <div className="countrie_card" onClick={()=>clickHandler()}>
            <figure>
                <img src={e.flags.png} alt={e.name.common} />
            </figure>
            <h2>{e.name.common}</h2>
        </div>
      }
    </>
  )
}
