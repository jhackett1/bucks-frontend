import React from 'react'
import Link from 'next/link'
import heart from './heart.svg'
import arrow from './arrow.svg'
import './style.scss'

export default ({service}) =>{
    
    let words = 25
    let description = service.description.split(" ")
    if(description.length > words){
        description = description.splice(0,words).join(" ") + "..."
    } else {
        description = description.join(" ")
    }
    
    return(
        <div className="service-card">

        <div className="service-card__body">
            <p className="service-card__category">{service.category}</p>
            <h3 className="service-card__title">{(service.name)? service.name : service.parent_organisation}</h3>
            <p className="service-card__description">{description}</p>
        </div>

        <div className="service-card__footer">
            <button className="service-card__save"><img src={heart} alt="Save for later"/></button>
            <Link href={`/service/${service.id}`}>
                <a className="service-card__call-to-action">See details <img alt="" src={arrow} className="service-card__arrow-icon" role="presentation"/></a>
            </Link>
        </div>

    </div>
    )

}
