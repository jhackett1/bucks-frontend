import React from 'react'
import './style.scss'

export default ({content}) =>
    <div className="rich-text" dangerouslySetInnerHTML={{__html: content}}></div>