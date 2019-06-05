import React from 'react'
import Layout from '../components/Layout'
import {getServiceById} from '../api/services'

import Link from 'next/link'
import AvailableOnDays from '../components/AvailableOnDays'

export default class extends React.Component{

    static async getInitialProps ({query}) {
        return await getServiceById(query.id)
    }

    render(){

        let service = this.props.service

        console.log(service)

        return(
            <Layout>
                <div className="container">
                    <Link href="/services"><a>Back to services</a></Link>

                    <p>{service.category}</p>
                    <h1>{service.name}</h1>
                    <p>{service.description}</p>

                    <AvailableOnDays days={service.days}/>

                    <Link href={service.url}>
                        <a>Go to website</a>
                    </Link>

                </div>

            </Layout>
        )
    }

}
