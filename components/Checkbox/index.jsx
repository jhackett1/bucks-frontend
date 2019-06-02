import React from 'react'
import './style.scss'

export default ({name, label, value}) =>
    <>
        <input id={name} name={name} className="checkbox__input" type="checkbox" value={value}/>
        <label htmlFor={name} className="checkbox__label">{label}</label>
    </>