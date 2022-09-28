import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import EDNPOINTS from '../helpers/ENDPOINTS';
import { Fetch_Request } from '../helpers/restCountriestHTTPRequest';
import CountrieCard from './CountrieCard';
import Loading from './Loading';

export default function MainContinentCountriesComponent() {
    const {continent} = useParams();
    const [apiResponse, setApiResponse] = useState(undefined);

    useEffect(() => {
        const getData =  async()=>{
            const res = await Fetch_Request(EDNPOINTS.continent+continent);            
            setApiResponse(res);
        }
        getData()
    }, []);    

    return (
      <>
        {
          apiResponse
          ?apiResponse.map(e=><CountrieCard e={e} key={Math.round(Math.random()*Date.now())}/>)
          :<Loading/>
        }
      </>
    )
}