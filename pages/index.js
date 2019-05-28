import React from 'react'
import fetch from 'isomorphic-unfetch'
import Link from 'next/link'
import Layout from '../components/_Layout'

export default class Index extends React.Component{

    static async getInitialProps ({ query }) {
        const res = await fetch(`http://localhost:8000/api/v2/pages/?type=lifeevents.LifeEventPage`) 
        const data = await res.json()
        return data
    }

    render(){
        return(
            <>
                <Layout>
                    <h1>Home</h1>
                    <ul>
                        {this.props.items.map((item, i)=>
                            <li key={i}>
                                <Link href={`/life-event/${item.meta.slug}`}><a>{item.title}</a></Link>
                            </li>
                        )}
                    </ul>
                </Layout>

            </>
        )
    }
}