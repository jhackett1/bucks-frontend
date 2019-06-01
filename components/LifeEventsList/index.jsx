import React from 'react'
import Link from 'next/link'

import './style.scss'

export default ({items})=>
    <section class="life-events">
        <div className="container">
            <h2 className="life-events__headline section-title">Help with life events</h2>
            <ul className="life-events__list">
                {items.map((item, i)=>
                    <li className="life-events__item" key={i}>
                        <Link href={`/life-event/${item.meta.slug}`}>
                            <a>{item.title}</a>
                        </Link>
                    </li>
                )}
            </ul>
        </div>
    </section>