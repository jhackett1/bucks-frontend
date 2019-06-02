import React from 'react'
import Link from 'next/link'
import './style.scss'

export default ({popularPages}) =>
    <>
        <h3 className="popular-pages__title">Popular pages</h3>
        <ul className="popular-pages__list">
            {popularPages.map((page, i)=>
                <li className="popular-pages__item" key={i}>
                    <Link href="#"><a className="popular-pages__link">Popular page name goes here</a></Link>
                </li>
            )}
        </ul>
    </>