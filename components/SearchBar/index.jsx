import React from 'react'

import './style.scss'
import icon from './search.svg'

export default () =>
    <form className="search">
        <input className="search__input" type="search" name="search" placeholder="Start typing..."></input>
        <button className="search__submit" type="submit">
            <img className="search__icon" src={icon} alt="Submit search"/>
            </button>
    </form>