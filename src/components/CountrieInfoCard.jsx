import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import EDNPOINTS from '../helpers/ENDPOINTS';
import { Fetch_Request } from '../helpers/restCountriestHTTPRequest';
import heart_empty from "../assets/heart.png";
import heart_full from "../assets/heart-full.png";
import Loading from './Loading';

export default function CountrieInfoCard() {
    let {code} = useParams();
    const [apiResponse, setApiResponse] = useState(undefined);    

    useEffect(() => {       
        const getApiData = async()=>{
          const res = await Fetch_Request(`${EDNPOINTS.name}${code}`);
          setApiResponse(res[0]);    
        }
        getApiData();
    }, []);    

    return (
      <>
        {
            apiResponse 

            ?
            <div className="countrie-info_card">
                <figure>
                    <img src={apiResponse.flag} alt={apiResponse.name} />
                </figure>
                <section className="info">
                    <h2>{apiResponse.name}</h2>
                    
                    <article>
                        <p>area: <span>{apiResponse.area}km²</span></p>
                        <p>capital: <span>{apiResponse.capital}</span></p>
                        <p>language: <span>{apiResponse.languages[0].name}</span></p>
                        <p>native name: <span>{apiResponse.nativeName}</span></p>
                        <p>pupulation: <span>{apiResponse.population}</span></p>
                        <p>region: <span>{apiResponse.region}</span></p>
                        <p>sub-region: <span>{apiResponse.subregion}</span></p>
                        <p>timezone: <span>{apiResponse.timezones}</span></p>
                    </article>

                    <section className='btn'>
                        <img src={heart_empty} alt="add_to_favs" />
                    </section>
                </section>
            </div>

            :
            <Loading/>
        }
      </>
    )
}
