import React, { useEffect, useState } from 'react'
import EDNPOINTS from '../helpers/ENDPOINTS';
import { Fetch_Request } from '../helpers/restCountriestHTTPRequest';
import CountrieCard from './CountrieCard';

export default function MainAllCountriesComponent() {
    //state per caricare i dati de ogni paese
    const [apiResponse, setApiResponse] = useState(undefined) ;   
    

    //effect per obttenere i dati della API
    useEffect(() => {       
      const getApiData = async()=>{
        const res = await Fetch_Request(`${EDNPOINTS.all}`);
        setApiResponse(res);    
      }
      getApiData();
    }, []);

    return (
      apiResponse && apiResponse.map(e=><CountrieCard key={Math.round(Math.random()*Date.now())} countrie={e}/>)
    )
}
