import React from 'react'
import Link from 'next/link'

import logo from './logo.png'

export default () =>
    <header className="container">
        <Link href="/">
            <a><img src={logo} alt="Buckinghamshire County Council"/></a>
        </Link>

        <Link href="/services">
            <a>All services</a>
        </Link>
    </header>