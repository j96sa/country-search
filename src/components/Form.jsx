import {  faHeart, faSearch, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';


export default function Form({active}) {  
  const navigate = useNavigate();
  //state per cambiare fra il input e il texto nel component <MainPage/>
  const [activeForm, setActiveForm] = useState(false);    
  //state per controllare cosa se mostra nell form <h2/> e a dove se redirige la pagina
  const [url, setUrl] = useState("/continents"); 
  //state per controllare il form.value
  const [formValue, setFormValue] = useState({country:""});

  
  //effect per cambiare la url
  useEffect(() => {
    navigate(url);
  }, [url]);


  //const per aggiornare il form
  const formChangeHandler =(e)=>{
    setFormValue({...formValue,[e.target.name]:e.target.value})
  };

  //keydown hadler
  const keyDowFormHandler = (e)=>{
    e.key==="Enter" && navigate(`/countrie/${formValue.country}`);
  };
  
  //constante per controllare il btn di cancelare nel form
  const cancelFormBtn = ()=>{
    setFormValue({country:""});
    setActiveForm(false);
  };

  //validazione per il form
  const formValidation = ()=>{
    formValue.country!=="" && navigate(`/countrie/${formValue.country}`)    
  };
  
  return (
    <>      
      <div className={active ?"form active" :"form"}>
        {
          !activeForm
          
          ?(
            url==="/continents"
            ?<h2 onClick={()=>setUrl("/all-countries")} >See All Countries</h2>
            :<h2 onClick={()=>setUrl("/continents")} >See Continents</h2>            
          )
          
          :(
            <section className="input">
              <input onKeyDown={(e)=>keyDowFormHandler(e)} onChange={formChangeHandler} value={formValue.country} type="text" name="country" placeholder='Write a country name...?'/>
              <FontAwesomeIcon icon={faXmark} onClick={()=>cancelFormBtn()} />
            </section>
          )
        } 

        <section className='btn'>
          <button className='fav-btn' onClick={()=>navigate(`/favorite-list`)}>
            <FontAwesomeIcon icon={faHeart}/>
          </button>

          <button className='search-btn' onClick={!activeForm ?()=>setActiveForm(true) :()=>formValidation()}>
            <FontAwesomeIcon icon={faSearch}/>
          </button>
        </section>
      </div>
    </>
  )
}
