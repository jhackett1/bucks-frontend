import React from 'react'

export default class extends React.Component{

    // static async getInitialProps ({ query }) {
    //     const res = await fetch(`http://localhost:8000/api/services`) 
    //     const data = await res.json()
    //     return data
    // }

    render(){
        return(
            <h1>Recommendations</h1>
        )
    }

}
