import React, { useState } from 'react';
import { useEffect } from 'react';
import loader_svg from "../assets/tail-spin.svg";

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
        <img src={error ?"https://www.freeiconspng.com/thumbs/error/red-circular-image-error-0.png" :loader_svg} alt="loader" />
      </div>
    </>
  )
}
