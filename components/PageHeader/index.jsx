import React from 'react'
import Link from 'next/link'
import './style.scss'

const Breadcrumbs = ({parent, title}) =>
    <ul className="breadcrumbs">
        {parent.id != 3 &&
            <li className="breadcrumbs__item">
                <Link href="/"><a className="breadcrumbs__link">Care for adults</a></Link>
            </li>
        }
        <li className="breadcrumbs__item">
            <Link href={parent.meta.html_url}><a className="breadcrumbs__link">{parent.title}</a></Link>
        </li>
        <li className="breadcrumbs__item">{title}</li>
    </ul>

export default ({parent, title, intro}) =>
    <section className="page-header">
        <div className="container">
            <div className="two-thirds">
                <Breadcrumbs parent={parent} title={title}/>
                {title && <h1 className="page-header__title">{title}</h1>}
                {intro && <p className="page-header__intro">{intro}</p>}
            </div>
        </div>
    </section>