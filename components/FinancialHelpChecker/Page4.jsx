import React from 'react'

const Page4 = ({reset, kindOfHelp, anySavings}) => 
    <>
        <h2 className="financial-checker__title">You may get some financial help</h2>
        
        <strong>answers:</strong><br/>
        {kindOfHelp}<br/>
        {anySavings}

        <p className="financial-checker__lede">Everyone has to pay something towards their residential care, but you may be entitled to financial help.</p>
        <p className="financial-checker__lede">We can help you find the best care options to suit you during a <a>social care assessment</a>.</p>
        <p className="financial-checker__lede">Your savings and income will be taken account during your assessment.</p>
        <button className="financial-checker__button financial-checker__button--inverted" onClick={()=>{reset()}}>Start again</button>
    </>

export default Page4