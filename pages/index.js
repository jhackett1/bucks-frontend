import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import NeedsExplorer from '../components/NeedsExplorer'
import LifeEventsList from '../components/LifeEventsList'
import {getHomepageContent, fakeFunction} from '../api/wagtailPages'
import PopularAdvice from '../components/PopularAdvice';
import SearchPanel from '../components/SearchPanel';

// const fakePages = [true, true, true, true, true, true]
const popularSearches = [
    {
        title: "I need urgent help",
        url: "#"
    },{
        title: "Explore services in my local area",
        url: "#"
    },{
        title: "Coping with loneliness",
        url: "#"
    }
]


export default class Index extends React.Component{

    static async getInitialProps () {
        return await getHomepageContent()
    }

    render(){
        let lifeEvents = this.props[0].items
        let popularAdvice = this.props[1].items
        return(
            <Layout>
                <Hero/>
                <div className="container">
                    <NeedsExplorer/>
                </div>
                <LifeEventsList items={lifeEvents}/>
                <PopularAdvice pages={popularAdvice}/>
                <SearchPanel popularPages={popularSearches}/>
            </Layout> 
        )
    }
}