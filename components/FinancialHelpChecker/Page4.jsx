import React from 'react'

const Page4 = ({changePage, kindOfHelp, anySavings}) => 
    <>
        <h2 className="financial-checker__title">You may get some financial help</h2>
        
        <strong>answers:</strong><br/>
        {kindOfHelp}<br/>
        {anySavings}

        <p>Everyone has to pay something towards their residential care, but you may be entitled to financial help.</p>
        <p>We can help you find the best care options to suit you during a social care assessment.</p>
        <p>Your savings and income will be taken account during your assessment.</p>
        <button className="financial-checker__button financial-checker__button--inverted" onClick={()=>{changePage(1)}}>Start again</button>
    </>

export default Page4