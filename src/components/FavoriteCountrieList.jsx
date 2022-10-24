import { faAnglesUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import CountrieList from '../context/basicContext'
import BackButton from './BackButton';
import CountrieCard from './CountrieCard';

export default function FavoriteCountrieList() {
  const {countrieList} = useContext(CountrieList); 

  //state per controllare si se mostra il componente <Form/> e il scrollBtn quando si fa scroll in MainPage()
  const [showScroll, setShowScroll] = useState(true);


  //effect per mostrare e nascondere sia il component <Form/> che il scroll-button
  useEffect(() => {
    const scrollControllerInput = ()=>{
      let {scrollTop} = document.documentElement;
      scrollTop > 340 ?setShowScroll(false) :setShowScroll(true);      
    }

    window.addEventListener("scroll",scrollControllerInput);
    return()=>window.removeEventListener("scroll",scrollControllerInput);
  });

  return (
    <>
        <div className="favorite_list">
          <BackButton/>
          <section className="favorite_list-content">
            {countrieList.map(e=><CountrieCard key={Math.round(Math.random()*Date.now())} countrie={e}/>)}
          </section>
          {/* scroll top button */}
          <button className={showScroll ?'scrollUpBtn' :'scrollUpBtn active'} onClick={()=>window.scrollTo({top:0,behavior:'smooth'})}>
            <FontAwesomeIcon icon={faAnglesUp} />
          </button>
        </div>
    </>
  )
}
