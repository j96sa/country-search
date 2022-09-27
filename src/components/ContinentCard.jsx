import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function ContinentCard({name,img}) {
  const navigate = useNavigate();


  return (
    <>
        <section className="continent_card" onClick={()=>navigate(`/continents/${name}`)}>
            <figure>
                <img src={img} alt={"img_"+name} />
            </figure>
            <article>
                <h3>{name}</h3>
            </article>
        </section>
    </>
  )
}
