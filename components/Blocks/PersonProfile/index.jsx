import React from 'react'

import './style.scss'

export default ({imgSrc, imgAlt, headline, text}) =>
    <section className="person-profile">
        <img className="person-profile__image" src={imgSrc} alt={imgAlt}/>
        <h2 className="person-profile__headline">{headline}</h2>
        <div className="person-profile__text" dangerouslySetInnerHTML={{__html: text}}></div>
    </section>