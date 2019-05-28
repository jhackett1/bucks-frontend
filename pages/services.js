import React from 'react'
import Layout from '../components/Layout'

export default class extends React.Component{

    // static async getInitialProps ({ query }) {
    //     const res = await fetch(`http://localhost:8000/api/services`) 
    //     const data = await res.json()
    //     return data
    // }

    render(){
        return(
            <Layout>
                <h1>Recommendations</h1>
            </Layout>
        )
    }

}
