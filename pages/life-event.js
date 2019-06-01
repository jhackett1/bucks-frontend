import React from 'react'
import { withRouter } from 'next/router'
import Layout from '../components/Layout'
import {getPageByPath} from '../api/wagtailPages'

export default class LifeEvent extends React.Component{

    static async getInitialProps ({ query }) {
        return await getPageByPath(query.slug)
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