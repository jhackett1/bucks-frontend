import React from 'react'

const Page3 = ({changePage}) => 
    <>
        <h2 className="financial-checker__title">Do you have savings?</h2>
        <button className="financial-checker__button" onClick={()=>{changePage(4)}}>Get answer</button>
    </>

export default Page3