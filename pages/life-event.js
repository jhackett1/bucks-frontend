import React from 'react'
import { withRouter } from 'next/router'
import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'
import Blocks from '../components/Blocks'
import {getPageByPath} from '../api/wagtailPages'

import './life-event.scss'

export default class LifeEvent extends React.Component{

    static async getInitialProps ({ query }) {
        return await getPageByPath(query.slug)
    }

    render(){
        return(
            <Layout>

                <PageHeader breadcrumbs={[
                    {
                        title: "Care for adults",
                        url: "/"
                    },
                    {
                        title: this.props.title
                    },
                ]} title={this.props.title} intro={this.props.intro}/>
                <div className="page-content">
                    <div className="container">
                        <Blocks blocks={this.props.content}/>
                    </div>
                </div>

            </Layout>
        )
    }

}