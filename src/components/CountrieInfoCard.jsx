import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import EDNPOINTS from '../helpers/ENDPOINTS';
import { Fetch_Request } from '../helpers/restCountriestHTTPRequest';
import heart_empty from "../assets/heart.png";
import heart_full from "../assets/heart-full.png";
import Loading from './Loading';
import CountrieList from '../context/basicContext';

export default function CountrieInfoCard() {
    const {setAddCountrie,countrieList,setCountrieList} = useContext(CountrieList)
    //state per sapere se il paese e gia nel countrieList
    const [savedCountry, setSavedCountry] = useState(undefined);
    let {code} = useParams();
    const [apiResponse, setApiResponse] = useState(undefined);  

    
    //ogni volta che si agiorna il countrieList se verifica se il paese e gia salvato
    useEffect(() => {       
        const getApiData = async()=>{
            const res = await Fetch_Request(`${EDNPOINTS.name}${code}`);
            setApiResponse(res[0]);    
            
            const ID = res[0].nativeName;            
            
            //per sapere se il paese visualizato e gia salvato 
            countrieList.some(e=>e.nativeName === ID)
            ?setSavedCountry(true)
            :setSavedCountry(false);
        }
        getApiData();        
    }, [countrieList]);        
    

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
                        <p className='timezone'>timezone: {apiResponse.timezones.map(e=><span>{e}</span>)}</p>
                    </article>

                    <section className='btn'>
                        <img onClick={()=>setAddCountrie(apiResponse)} src={savedCountry ?heart_full :heart_empty} alt="add_to_favs" />
                    </section>
                </section>
            </div>

            :
            <Loading/>
        }
      </>
    )
}
