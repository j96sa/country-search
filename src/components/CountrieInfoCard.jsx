import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import EDNPOINTS from '../helpers/ENDPOINTS';
import { Fetch_Request } from '../helpers/restCountriestHTTPRequest';
import heart_empty from "../assets/heart.png";
import heart_full from "../assets/heart-full.png";
import Loading from './Loading';
import CountrieList from '../context/basicContext';

export default function CountrieInfoCard() {
    const {setAddCountrie,countrieList} = useContext(CountrieList)
    //state per sapere se il paese e gia nel countrieList
    const [savedCountry, setSavedCountry] = useState(undefined);
    //state per salvare i dati del paese a caricare
    const [apiResponse, setApiResponse] = useState(undefined);  
    let {code,id} = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    
    //ogni volta che si agiorna il countrieList se verifica se il paese e gia salvato
    useEffect(() => {       
        //const per ottenere i dati della API
        const getApiData = async()=>{
            const res = await Fetch_Request(`${EDNPOINTS.name}${code}`);
            setApiResponse(res[0]);    
            
            const ID = res[0].nativeName;            
            
            //per sapere se il paese visualizato e gia salvato 
            countrieList.some(e=>e.nativeName === ID)
            ?setSavedCountry(true)
            :setSavedCountry(false);
        };

        //const per ottenere i dati dell LocalStorage
        const getLocalStorageData = ()=>{
            setApiResponse(countrieList.find(e=>e.nativeName===id));
            setSavedCountry(true);
        };        

        //validazione per sapere se si devo prendere i dati del LocalStorage o della API
        location.pathname!==`/favorite-list/${id}` ?getApiData() :getLocalStorageData();
    }, [countrieList]);
    

    //const per controllare quando se aggiunge o se cancella un paese di la FavList
    const addFavHandler = ()=>{        
        if((location.pathname).includes("favorite-list")){
            setAddCountrie(apiResponse);
            navigate("/favorite-list");
        }else{
            setAddCountrie(apiResponse);
        }        
    };

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
                        <p className='timezone'>timezone: {apiResponse.timezones.map(e=><span key={Math.round(Math.random()*Date.now())} >{e}</span>)}</p>
                    </article>

                    <section className='btn'>
                        <img onClick={()=>addFavHandler()} src={savedCountry ?heart_full :heart_empty} alt="add_to_favs" />
                    </section>
                </section>
            </div>

            :
            <Loading/>
        }
      </>
    )
}
