import React from 'react'
import fetch from 'isomorphic-unfetch'
import Link from 'next/link'
import Layout from '../components/Layout'

export default class Index extends React.Component{

    static async getInitialProps ({ query }) {
        const res = await fetch(`http://localhost:8000/api/v2/pages/?type=lifeevents.LifeEventPage`) 
        const data = await res.json()
        return data
    }

    render(){
        return(
            <Layout>
                <h1>Care and support for adults</h1>
                <p>Understand the care and support options available in your community.</p>
                
                <ul>
                    {this.props.items.map((item, i)=>
                        <li key={i}>
                            <Link href={`/life-event/${item.meta.slug}`}><a>{item.title}</a></Link>
                        </li>
                    )}
                </ul>
            </Layout>
        )
    }
}