import React from 'react'

import './style.scss'
import IsThisPageUseful from '../IsThisPageUseful';

export default ({children})=>
    <main className="page-content">
        <div className="container page-content__inner">
            {children}
        </div>
        <IsThisPageUseful/>
    </main>