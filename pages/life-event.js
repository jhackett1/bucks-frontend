import React from 'react'
import { withRouter } from 'next/router'
import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'
import {getPageByPath} from '../api/wagtailPages'
import { throws } from 'assert';

export default class LifeEvent extends React.Component{

    static async getInitialProps ({ query }) {
        return await getPageByPath(query.slug)
    }

    render(){
        return(
            <Layout>

                <PageHeader headline={this.props.title} lede={this.props.intro}/>

            </Layout>
        )
    }

}