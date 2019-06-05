import React from 'react'
import Head from 'next/head'
import { Provider } from "reakit";

import Header from '../Header'
import Footer from '../Footer'

import './style.scss'

// console.warn("⚠️ This is prototype code. Exercise care before reusing. ⚠️")

export default ({children})=>
<>
    <Provider>
        <Head>
            <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700&display=swap" rel="stylesheet"/> 
        </Head>
        <Header/>
        {children}
        <Footer/>
    </Provider>

</>