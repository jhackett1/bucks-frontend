import React from 'react'
import Link from 'next/link'
import './style.scss'

const Page = ({page}) => 
    <Link href="#">
        <a className="popular-advice__item">
            <img className="popular-advice__image" src='http://placehold.it/300x200' alt="test"/>
            <h3 className="popular-advice__title">Page title goes here</h3>
        </a>
    </Link>

export default ({pages}) => 
    <section className="popular-advice container">
        <h2 className="section-title">Popular advice</h2>
        <div className="popular-advice__items">
            {pages.map((page, i)=>
                <Page page={page} key={i}/>    
            )}
        </div>

    </section>