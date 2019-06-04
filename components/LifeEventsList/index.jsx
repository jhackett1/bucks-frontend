import React from 'react'
import Link from 'next/link'

import './style.scss'
import triangle from './triangle.svg'

const LifeEvent = ({item}) =>
    <li className="life-events__item">
        <Link href={`/${item.meta.slug}`}>
            <a className="life-events__link">
                <h3 className="life-events__title">{item.title}</h3>
                <p className="life-events__summary">{item.summary}</p>
            </a>
        </Link>

    </li>

export default ({items})=>
    <section className="life-events">
        <img className="life-events__triangle" src={triangle} alt="" role="presentation"/>
        <div className="container">
            <h2 className="life-events__headline section-title">Help with life events</h2>
            <ul className="life-events__list">
                {items.map((item, i)=> <LifeEvent item={item} key={i}/> )}
            </ul>
        </div>
    </section>