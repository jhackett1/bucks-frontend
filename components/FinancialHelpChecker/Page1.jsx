import React from 'react'

const Page1 = ({changePage}) => 
    <>
        <h2 className="financial-checker__title financial-checker__title--centred">Financial help</h2>
        <p className="financial-checker__lede financial-checker__lede--centred">All care costs something, but if you have less than £23,000 in savings, you could be entitled to financial help.</p>
        <button className="financial-checker__button" onClick={()=>{changePage(2)}}>Check now</button>
    </>

export default Page1