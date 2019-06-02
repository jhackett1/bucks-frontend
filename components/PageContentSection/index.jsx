import React from 'react'

import './style.scss'

export default ({children})=>
    <main className="page-content">
        <div className="container">
            {children}
        </div>
    </main>