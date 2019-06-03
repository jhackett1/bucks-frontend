import React from 'react'
import RadioPanel from './RadioPanel'

const Page2 = ({changePage, kindOfHelp, answerKindOfHelp}) => {

    const handleChange = (event) => {
        answerKindOfHelp(event.target.value)
    }

    return(
        <>
            <h2 className="financial-checker__title">What kind of help do you need?</h2>
            <form id="kind-of-help">
                <RadioPanel label="Equipment in my own home" description="This includes shower chairs, raised toilet seats and grab rails" name="kind-of-help" value="equipment" handleChange={handleChange} valueState={kindOfHelp}/>
                <RadioPanel label="Care and support in my own home" description="This includes someone who visits to help you with personal care, such as dressing and bathing" name="kind-of-help" value="at-home" handleChange={handleChange} valueState={kindOfHelp}/>
                <RadioPanel label="Residential or nursing care home" name="kind-of-help" value="residential" handleChange={handleChange} valueState={kindOfHelp}/>
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