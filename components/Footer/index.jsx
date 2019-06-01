import React from 'react'
import Link from 'next/link'

import './style.scss'

export default () =>
    <footer className="footer container">
        <p className="footer__text">Built and maintained by <a href="http://buckscc.gov.uk">Buckinghamshire Council</a></p>
        <ul className="footer__menu">
            <li className="footer__menu-item">
                <Link href="#"><a className="footer__link">Privacy statement</a></Link>
            </li>
            <li className="footer__menu-item">
                <Link href="#"><a className="footer__link">Contact us</a></Link>
            </li>
        </ul>
    </footer>