import React from 'react'
import './style.scss'

export default ({headline, lede}) =>
    <section className="page-header">
        <div className="container">
            {headline && <h1 className="page-header__headline">{headline}</h1>}
            {lede && <p className="page-header__lede">{lede}</p>}
        </div>
    </section>