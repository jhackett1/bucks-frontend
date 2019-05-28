import React from 'react'

export default ({handleChange}) => (
    <>
        <p>What do you want support with?</p>
        <div>
            <input type="checkbox" id="active" name="category" value="true" onChange={handleChange}/>
            <label htmlFor="active">active</label>
        </div>
        <div>
            <input type="checkbox" id="social" name="category" value="true" onChange={handleChange}/>
            <label htmlFor="social">social</label>
        </div>
        <div>
            <input type="checkbox" id="support" name="category" value="true" onChange={handleChange}/>
            <label htmlFor="support">support</label>
        </div>
    </>
)
