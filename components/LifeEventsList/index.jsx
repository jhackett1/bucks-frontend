import React from 'react'
import Link from 'next/link'

import './style.scss'

export default ({items})=>
    <section class="life-events">
        <div className="container">
            <h2>Help with life events</h2>
            <ul>
                {items.map((item, i)=>
                    <li key={i}>
                        <Link href={`/life-event/${item.meta.slug}`}>
                            <a>{item.title}</a>
                        </Link>
                    </li>
                )}
            </ul>
        </div>
    </section>