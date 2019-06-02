import React from 'react'
import { withRouter } from 'next/router'
import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'
import PageContent from '../components/PageContentSection'
import Blocks from '../components/Blocks'
import Links from '../components/Links'
import {getPageByPath} from '../api/wagtailPages'
import SearchPanel from '../components/SearchPanel'
import NeedsExplorerSection from '../components/NeedsExplorerSection';


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
                <PageContent>
                    <Blocks blocks={this.props.content}/>
                    <Links links={this.props.external_links}/>
                    <NeedsExplorerSection/>
                </PageContent>
                <SearchPanel/>
            </Layout>
        )
    }

}