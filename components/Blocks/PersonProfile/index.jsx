import React, {useState} from 'react'

import './style.scss'
import arrow from './arrow.svg'

export default ({imgSrc, imgAlt, headline, text}) => {

    const [unfolded, unfold] = useState(false)

    if(!unfolded){
        text = text.split(" ").splice(0,15).join(" ") + "..."
    }

    return(
        <section className="person-profile">

            <img className="person-profile__image" src={imgSrc} alt={imgAlt} loading="lazy"/>
            <h2 className="person-profile__headline">{headline}</h2>
            <div className={(unfolded)? "person-profile__text person-profile__text--unfolded" : "person-profile__text"} dangerouslySetInnerHTML={{__html: text}}></div>
            {!unfolded && <button className="person-profile__unfold-button" onClick={()=> unfold(true)}>Keep reading  <img className="person-profile__icon" aria-hidden="true" role="presentation" alt="" src={arrow}/></button>}
            {unfolded}
        </section>
    )
}
