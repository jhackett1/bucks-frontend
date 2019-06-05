import React from 'react'
import Layout from '../components/Layout'
import {getServices} from '../api/services'
import ServiceCard from '../components/ServiceCard'
import Link from 'next/link'

export default class extends React.Component{

    static async getInitialProps () {
        return await getServices()
    }

    render(){
        return(
            <Layout>
                <div className="container">
                    <h1><span className="count">{this.props.count}</span> personalised recommendations</h1>
                    {this.props.results.map((service, i)=>
                        <ServiceCard service={service} key={i}/>    
                    )}
                </div>
            </Layout>
        )
    }

}
