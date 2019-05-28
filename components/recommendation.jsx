import React from 'react'

export default ({item}) => 
    <li>
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <p>Days: {item.days}</p>
    </li>