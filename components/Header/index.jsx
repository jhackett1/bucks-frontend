import React from 'react'
import Link from 'next/link'
import SearchBar from '../SearchBar'

import './style.scss'
import logo from './logo.svg'

export default () =>
    <header className="site-header container">
        <Link href="/">
            <a><img className="site-header__logo" src={logo} alt="Buckinghamshire County Council"/></a>
        </Link>

        <div className="site-header__actions">
            <SearchBar/>
            <nav className="site-header__actions">
                <Link href="/services">
                    <a className="site-header__nav-link">Explore services</a>
                </Link>
                <Link href="#">
                    <a className="site-header__nav-link">Log in</a>
                </Link>
                <Link href="#">
                    <a className="site-header__nav-link">Sign up</a>
                </Link>
            </nav>
        </div>
    </header>