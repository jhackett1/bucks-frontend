import React from 'react'
import fetch from 'isomorphic-unfetch'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import LifeEventsList from '../components/LifeEventsList'

export default class Index extends React.Component{

    static async getInitialProps ({ query }) {
        const res = await fetch(`http://localhost:8000/api/v2/pages/?type=lifeevents.LifeEventPage`) 
        const data = await res.json()
        return data
    }

    render(){
        return(
            <Layout>
                <Hero/>
                <LifeEventsList items={this.props.items}/>
            </Layout>
        )
    }
}