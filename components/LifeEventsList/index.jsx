import Link from 'next/link'

import './style.scss'

const LifeEvent = ({item}) =>
    <li className="life-events__item">
        <Link href={`/life-event/${item.meta.slug}`}>
            <a className="life-events__title">{item.title}</a>
        </Link>
        <p className="life-events__summary">{item.summary}</p>
    </li>

export default ({items})=>
    <section className="life-events">
        <div className="container">
            <h2 className="life-events__headline section-title">Help with life events</h2>
            <ul className="life-events__list">
                {items.map((item, i)=> <LifeEvent item={item} key={i}/> )}
            </ul>
        </div>
    </section>