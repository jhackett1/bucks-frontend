import React from 'react'
import Link from 'next/link'
import './style.scss'

import arrow from './arrow.svg'

export const LinkTile = ({link, external}) =>
    <Link href={link.url || link.meta.html_url}>
        <a className="link-tile"  target={external && "blank"}>
            <h3 className="link-tile__title">{link.title}</h3>
            <p className="link-tile__summary">{link.summary}</p>
            {external && <div className="link-tile__call-to-action">{link.link_text} <img className="link-tile__icon" aria-hidden="true" role="presentation" alt="" src={arrow}/></div>}
        </a>
    </Link>

export default ({links, external}) =>
    <section className="links">
        <h2 className={(external)? "links__title links__title--external section-title" : "links__title section-title"}>{(external)? "External links" : "Learn more"}</h2>
        {external && <p className="links__lede">Discover more about this issue from these trusted websites</p>}
        {links && links.map((link, i)=>
            <LinkTile link={link} key={i} external={external}/>            
        )}
    </section>

