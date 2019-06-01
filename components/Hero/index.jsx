import React from 'react'

import './style.scss'
import hero from './hero.png'

export default () =>
    <section className="hero container">
        <h1 className="hero__headline">Care and support for adults</h1>
        <p className="hero__slogan">Understand the care and support options available in your community.</p>
        {/* <img class="hero__image" src={hero}/> */}
    </section>