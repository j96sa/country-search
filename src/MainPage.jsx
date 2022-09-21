import React, { useEffect, useState } from 'react'
import EDNPOINTS from './helpers/ENDPOINTS';
import {Fetch_Request} from './helpers/restCountriestHTTPRequest';
import Form from './components/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesUp } from '@fortawesome/free-solid-svg-icons';
//images per ogni continent component
import img_europe from "./assets/europ.jpg"
import img_asia from "./assets/asia.jpg"
import img_americas from "./assets/americas.jpg"
import img_africa from "./assets/africa.jpg"
import img_oceania from "./assets/oceania.jpg"
import ContinentCard from './components/ContinentCard';
import CountrieCard from './components/CountrieCard';

//array con il nome di tutti continenti per poter renderizare dinamicamente ogni uno
const CONTINENTS_NAME = [{name:"Asia",img:img_asia},{name:"Africa",img:img_africa},{name:"America",img:img_americas},{name:"Erurope",img:img_europe},{name:"Ocenaia",img:img_oceania}];

export default function MainPage() {  
  //state per caricare i dati de ogni paese
  const [apiResponse, setApiResponse] = useState(null) ;
  //stato per controllare cosa si deve mostrare nell main_page component? 
  const [mainView, setMainView] = useState("continents");
  //state per controllare si se mostra il componente <Form/> e il scrollBtn quando si fa scroll in MainPage()
  const [showScroll, setShowScroll] = useState(true);
    
    
  //effect per obttenere i dati della API
  useEffect(() => {       
    const getApiData = async()=>{
      const res = await Fetch_Request(`${EDNPOINTS.all}`);
      setApiResponse(res);    
    }
    getApiData();
  }, []);


  //effect per mostrare e nascondere sia il component <Form/> che il scroll-button
  useEffect(() => {
    const scrollControllerInput = ()=>{
      let {scrollTop} = document.documentElement;
      scrollTop > 340 ?setShowScroll(false) :setShowScroll(true);      
    }

    window.addEventListener("scroll",scrollControllerInput);
    return()=>window.removeEventListener("scroll",scrollControllerInput);
  })
  

  return (
    <>
      <Form active={showScroll} mainView={mainView} setMainView={setMainView} />
      
      <div className='main_page'>
        <div className="main_page-content">
          {
            mainView==="continents"
            ?(
              CONTINENTS_NAME.map(e=><ContinentCard key={Math.round(Math.random()*Date.now())} name={e.name} img={e.img} />)
            )

            :(
              apiResponse.map(e=><CountrieCard key={Math.round(Math.random()*Date.now())} countrie={e}/>)
            )
          }
        </div>
      </div>
      
      {/* scroll top button */}
      <button className={showScroll ?'scrollUpBtn' :'scrollUpBtn active'} onClick={()=>window.scrollTo({top:0,behavior:'smooth'})}>
        <FontAwesomeIcon icon={faAnglesUp} />
      </button>
    </>
  );
}
