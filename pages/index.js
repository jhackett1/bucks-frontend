import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import NeedsExplorer from '../components/NeedsExplorer'
import LifeEventsList from '../components/LifeEventsList'
import {getLifeEvents} from '../api/wagtailPages'
import PopularAdvice from '../components/PopularAdvice';

const fakePages = [true, true, true, true, true, true]

export default class Index extends React.Component{

    static async getInitialProps ({ query }) {
        return await getLifeEvents()
    }

    render(){
        console.log(this.props.items)
        return(
            <Layout>
                <Hero/>
                <div className="container">
                    <NeedsExplorer/>
                </div>
                <LifeEventsList items={this.props.items}/>
                <PopularAdvice pages={fakePages}/>
            </Layout>
        )
    }
}