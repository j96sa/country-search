import React from 'react'
import ContinentCard from './ContinentCard'
//images per ogni continent component
import img_europe from "../assets/europ.jpg"
import img_asia from "../assets/asia.jpg"
import img_americas from "../assets/americas.jpg"
import img_africa from "../assets/africa.jpg"
import img_oceania from "../assets/oceania.jpg"


//array con il nome di tutti continenti per poter renderizare dinamicamente ogni uno
const CONTINENTS_NAME = 
[
{name:"Asia",img:img_asia},
{name:"Africa",img:img_africa},
{name:"America",img:img_americas},
{name:"Europe",img:img_europe},
{name:"Oceania",img:img_oceania}
];

export default function MainContinentsComponent() {
  return (
    CONTINENTS_NAME.map(e=><ContinentCard key={Math.round(Math.random()*Date.now())} name={e.name} img={e.img} />)
  )
}
