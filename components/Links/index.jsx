import React from 'react'
import Link from 'next/link'
import './style.scss'

import arrow from './arrow.svg'

export default ({links}) =>
    <section className="links">
        <h2 className="links__title section-title">External links</h2>
        <p className="links__lede">Discover more about this issue from these trusted websites</p>
        {links.map((link, i)=>


            <Link href={link.url}>
                <a className="link-tile">
                    <h3 className="link-tile__title">{link.title}</h3>
                    <p className="link-tile__summary">{link.summary}</p>
                    <div className="link-tile__call-to-action">{link.link_text} <img className="link-tile__icon" aria-hidden="true" role="presentation" alt="" src={arrow}/></div>
                </a>
            </Link>
            
        )}
    </section>