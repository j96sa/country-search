import React from 'react'

export default function ContinentCard({name,img}) {
  return (
    <>
        <section className="continent_card">
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
