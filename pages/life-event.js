import React from 'react'
import fetch from 'isomorphic-unfetch'
import { withRouter } from 'next/router'
import Layout from '../components/Layout'

export default class LifeEvent extends React.Component{

    static async getInitialProps ({ query }) {
        const res = await fetch(`http://localhost:8000/api/v2/pages?slug=${query.slug}`) 
        const results = await res.json()
        const res2 = await fetch(`http://localhost:8000/api/v2/pages/${results.items[0].id}`) 
        const data = await res2.json()
        return data
    }

    render(){
        return(
            <Layout>
                <h1>{this.props.title}</h1>
                <p>{this.props.intro}</p>
            </Layout>
        )
    }

}