import React from 'react'

export default ({handleChange, selectedState}) => (
    <>
        <p>Are you only interested in daytime activities?</p>
        <div>
            <input type="radio" id="yes" name="daytime" value={true} onChange={handleChange}/>
            <label htmlFor="yes">yes</label>
        </div>
        <div>
            <input type="radio" id="no" name="daytime" value={false} onChange={handleChange}/>
            <label htmlFor="no">no</label>
        </div>
    </>
)
