import React, { useState } from 'react';
import { useEffect } from 'react';
import loader_svg from "../assets/tail-spin.svg";
import error_svg from "../assets/error_log.png";

export default function Loading() {
  const [error, setError] = useState(false);

  useEffect(() => {
    setTimeout(() => {
        setError(true);
    }, 3000);
  },[]);
  

  return (
    <>
      <div className={error ?"error" :"loading"}>        
        <img src={error ?error_svg :loader_svg} alt="loader" />
        {error && <h2>Sorry, we have not had any response from our server <br/><br/>:(</h2>}
      </div>
    </>
  )
}
