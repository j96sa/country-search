import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPointLeft } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

export default function BackButton() {
    const {pathname} = useLocation();
    const navigate = useNavigate();

    const backButtonHandler = ()=>{        
        if(pathname==="/favorite-list"){
            navigate("/");
        }else if(pathname.includes("/favorite-list")){
            navigate("/favorite-list");
        }else{
            navigate("/");
        }
    };


    return (
      <>
          <div className="back_button" onClick={()=>backButtonHandler()}>
              <FontAwesomeIcon icon={faHandPointLeft} />
              <p>Go Back</p>
          </div>
      </>
    )
}
