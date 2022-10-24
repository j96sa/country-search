import React from 'react'
import { useContext } from 'react'
import CountrieList from '../context/basicContext'
import BackButton from './BackButton';
import CountrieCard from './CountrieCard';

export default function FavoriteCountrieList() {
    const {countrieList} = useContext(CountrieList);    

    return (
      <>
          <div className="favorite_list">
            <BackButton/>
            <section className="favorite_list-content">
              {countrieList.map(e=><CountrieCard key={Math.round(Math.random()*Date.now())} countrie={e}/>)}
            </section>
          </div>
      </>
    )
}
