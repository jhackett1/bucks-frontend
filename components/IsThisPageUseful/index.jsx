import React from 'react'
import './style.scss'

export default () =>
    <section className="useful-page">
        <div className="container">
            <div className="useful-page__inner">
                <p>Is this page useful?</p>
                <div class="useful-page__buttons">
                    <button class="useful-page__button">Yes</button>
                    <button class="useful-page__button">No</button>
                </div>
            </div>
        </div>
    </section>