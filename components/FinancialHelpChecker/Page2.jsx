import React from 'react'

const RadioButton = ({label, value, name, handleChange, valueState}) =>
    <>
        <label htmlFor={value}>{label}</label>
        <input type="radio" name={name} value={value} id={value} checked={valueState === value} onChange={handleChange} required/>
    </>

const Page2 = ({changePage, kindOfHelp, answerKindOfHelp}) => {

    const handleChange = (event) => {
        answerKindOfHelp(event.target.value)
    }

    return(
        <>
            {kindOfHelp}
            <h2 className="financial-checker__title">What kind of help do you need?</h2>

            <form id="kind-of-help">

                <RadioButton label="Equipment" name="kind-of-help" value="equipment" handleChange={handleChange} valueState={kindOfHelp}/>
                <RadioButton label="Care at home" name="kind-of-help" value="at-home" handleChange={handleChange} valueState={kindOfHelp}/>
                <RadioButton label="Residential care" name="kind-of-help" value="residential" handleChange={handleChange} valueState={kindOfHelp}/>

                <button className="financial-checker__button" onClick={()=>{
                    if(document.querySelector("#kind-of-help").checkValidity()){
                        changePage(3)
                    }
                }}>Next question</button>
            </form>
        </>
    )
}


export default Page2