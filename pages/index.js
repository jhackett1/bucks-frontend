import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import NeedsExplorer from '../components/NeedsExplorer'
import LifeEventsList from '../components/LifeEventsList'
import {getLifeEvents} from '../api/wagtailPages'

export default class Index extends React.Component{

    static async getInitialProps ({ query }) {
        return await getLifeEvents()
    }

    render(){
        return(
            <Layout>
                <Hero/>
                <div class="container">
                    <NeedsExplorer/>
                </div>
                <LifeEventsList items={this.props.items}/>
            </Layout>
        )
    }
}