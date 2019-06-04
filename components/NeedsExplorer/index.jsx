import React from 'react'
import './style.scss'
import Checkbox from '../Checkbox'

export default () =>
    <section className="needs-explorer">
        <h2 className="needs-explorer__title">Start exploring your needs</h2>
        <p className="needs-explorer__question">Are you looking for support for yourself, or someone you care for?</p>
        <div className="needs-explorer__options">
            <Checkbox label="Myself" name="test"/>
            <Checkbox label="Someone else" name="test2"/>
        </div>

        <p className="help-text">Choose one or both options</p>
    </section>
