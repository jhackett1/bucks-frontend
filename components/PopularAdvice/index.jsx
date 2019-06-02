import React from 'react'
import Link from 'next/link'
import './style.scss'

const Page = ({page}) => 
    <Link href={page.meta.html_url}>
        <a className="popular-advice__item">
            {page.image && <img className="popular-advice__image" src={page.image.meta.download_url} alt={page.image.title} loading="lazy"/>}
            <h3 className="popular-advice__title">{page.title}</h3>
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