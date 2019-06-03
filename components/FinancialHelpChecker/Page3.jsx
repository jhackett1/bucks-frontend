import React from 'react'
import RadioPanel from './RadioPanel'

const Page3 = ({changePage, anySavings, answerAnySavings}) => {

    const handleChange = (event) => {
        answerAnySavings(event.target.value)
    }

    return(
        <>
            <h2 className="financial-checker__title">Do you have savings?</h2>
            <p className="financial-checker__lede">By savings, we mean:</p>

            <ul className="financial-checker__help-list">
                <li>Money held in a bank, building society or Post Office account</li>
                <li>Savings certificates</li>
                <li>Stocks, shares, bonds and unit trusts</li>
                <li>Premium Bonds</li>
                <li>Buildings in the UK or abroad (apart from your home)</li>
                <li>Land in the UK or abroad</li>
                <li>Cash</li>
                <li>Trust funds</li>
                <li>ISAs</li>
            </ul>


            <form id="any-savings">
                <RadioPanel label="Under £14,250" name="any-savings" value="low" handleChange={handleChange} valueState={anySavings}/>
                <RadioPanel label="Between £14,250 and £23,250" name="any-savings" value="mid" handleChange={handleChange} valueState={anySavings}/>
                <RadioPanel label="Over £23,250" name="any-savings" value="high" handleChange={handleChange} valueState={anySavings}/>
                <button className="financial-checker__button" onClick={()=>{
                    if(document.querySelector("#any-savings").checkValidity()){
                        changePage(4)
                    }
                }}>Get answer</button>
            </form>

        </>
    )
}


export default Page3