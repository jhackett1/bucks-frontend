import React from 'react'
import Link from 'next/link'
import './style.scss'

const Breadcrumbs = ({items}) =>
    <ul className="breadcrumbs">
        {items.map((item, i)=>
            <li className="breadcrumbs__item" key={i}>
                {(item.url)? <Link href={item.url}><a className="breadcrumbs__link">{item.title}</a></Link> : item.title}
            </li>
        )}
    </ul>

export default ({breadcrumbs, title, intro}) =>
    <section className="page-header">
        <div className="container">
            <Breadcrumbs items={breadcrumbs}/>
            {title && <h1 className="page-header__title">{title}</h1>}
            {intro && <p className="page-header__intro">{intro}</p>}
        </div>
    </section>