import React from 'react'
import Layout from '../components/Layout'
import {getServices} from '../api/services'

export default class extends React.Component{

    static async getInitialProps ({ query }) {
        return await getServices()
    }

    render(){
        console.log(this.props)
        return(
            <Layout>
                <h1>Services</h1>
            </Layout>
        )
    }

}
