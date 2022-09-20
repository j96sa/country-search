import { faSearch, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

export default function Form({active,mainView,setMainView}) {
  //state per cambiare fra il input e il texto nel component <MainPage/>
  const [activeForm, setActiveForm] = useState(false);

  return (
    <>      
      <div className={active ?"form active" :"form"}>
        {
          !activeForm
          
          ?(
            mainView==="continents"
            ?<h2 onClick={()=>setMainView("countries")} >See All Countries</h2>
            :<h2 onClick={()=>setMainView("continents")} >See Continents</h2>
          )
          
          :(
            <section className="input">
              <input type="text" name="country" placeholder='Write a country name...?'/>
              <FontAwesomeIcon icon={faXmark} onClick={()=>setActiveForm(false)} />
            </section>
          )
        } 

        <button onClick={!activeForm ?()=>setActiveForm(true) :()=>console.log("ok")}>
          <FontAwesomeIcon icon={faSearch}/>
        </button>
      </div>
    </>
  )
}
