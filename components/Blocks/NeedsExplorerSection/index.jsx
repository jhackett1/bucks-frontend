import React from 'react'
import NeedsExplorer from '../../NeedsExplorer'
import './style.scss'

export default () =>
    <section className="needs-explorer-section">
        <div className="container needs-explorer-section__inner">
            <h2 className="needs-explorer-section__headline">Explore your needs</h2>
            <p className="needs-explorer-section__lede">Find services in your community and from the council that can help you deal with this life event</p>
            <NeedsExplorer/>
        </div>
    </section>