import React, { useEffect, useState } from 'react'
import Form from './components/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesUp } from '@fortawesome/free-solid-svg-icons';
import { Outlet } from 'react-router-dom';


export default function MainPage() {    
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
      <Form active={showScroll}/>
      
      <div className='main_page'>
        <div className="main_page-content">
          <Outlet/>          
        </div>
      </div>
      
      {/* scroll top button */}
      <button className={showScroll ?'scrollUpBtn' :'scrollUpBtn active'} onClick={()=>window.scrollTo({top:0,behavior:'smooth'})}>
        <FontAwesomeIcon icon={faAnglesUp} />
      </button>
    </>
  );
}
