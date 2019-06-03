import React from 'react'

import './style.scss'

const RadioPanel  = ({
    label, 
    description, 
    value, 
    name, 
    handleChange, 
    valueState
}) =>
    <>
        <label htmlFor={value} className="radio-panel">
            <input 
                className="radio-panel__input" 
                type="radio" 
                name={name} 
                value={value} 
                id={value} 
                checked={valueState === value} 
                onChange={handleChange} 
                required/>
            <p class="radio-panel__title">{label}</p>
            <p class="radio-panel__description">{description}</p>
        </label>
    </>

export default RadioPanel 