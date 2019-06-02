import React from 'react'
import Link from 'next/link'
import './style.scss'

export default ({popularPages}) =>
    <>
        <h3 className="popular-pages__title">Popular pages</h3>
        <ul className="popular-pages__list">
            {popularPages.map((page, i)=>
                <li className="popular-pages__item" key={i}>
                    <Link href={page.url}><a className="popular-pages__link">{page.title}</a></Link>
                </li>
            )}
        </ul>
    </>