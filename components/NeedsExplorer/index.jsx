import React from 'react'
import './style.scss'
import Checkbox from '../Checkbox'

export default () =>
    <section className="needs-explorer">
        <p className="needs-explorer__question">Are you looking for support for yourself, or someone you care for?</p>
        <Checkbox label="Myself" name="test"/>
        <Checkbox label="Someone else" name="test2"/>
    </section>
