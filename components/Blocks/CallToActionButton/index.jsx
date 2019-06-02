import React from 'react'

import './style.scss'

export default ({text, url}) =>
    <a className="call-to-action-button" href={url}>{text}</a>