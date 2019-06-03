import React from 'react'
import Link from 'next/link'
import SearchBar from '../SmallSearch'

import './style.scss'
import logo from './logo.svg'

export default () =>
    <header className="site-header container">
        <Link href="/">
            <a><img className="site-header__logo" src={logo} alt="Buckinghamshire County Council"/></a>
        </Link>

        <nav className="site-header__navigation">
            <Link href="/services">
                <a className="site-header__nav-link">Explore services</a>
            </Link>
            <Link href="#">
                <a className="site-header__nav-link site-header__nav-link--desktop-only">Log in</a>
            </Link>
            <Link href="#">
                <a className="site-header__nav-link site-header__nav-link--desktop-only">Sign up</a>
            </Link>
            <SearchBar/>
        </nav>
        
    </header>