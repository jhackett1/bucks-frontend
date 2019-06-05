import React from 'react'
import { withRouter } from 'next/router'
import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'
import PageContent from '../components/PageContentSection'
import Blocks from '../components/Blocks'
import Links from '../components/Links'
import {getPageByPath, getChildrenById} from '../api/wagtailPages'
import SearchPanel from '../components/SearchPanel'

export default class LifeEvent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            childPages: []
        }
    }

    static async getInitialProps ({ query }) {
        return await getPageByPath(query.path)
    }

    async componentDidMount(){
        let childPages = await getChildrenById(this.props.id)
        this.setState({
            childPages: childPages.items
        })
    }

    render(){
        return(
            <Layout>
                <PageHeader parent={this.props.meta.parent} title={this.props.title} intro={this.props.intro}/>
                <PageContent>
                    <Blocks blocks={this.props.content}/>
                    {this.state.childPages.length > 0 && <Links links={this.state.childPages}/>}
                    {this.props.external_links.length > 0 && <Links links={this.props.external_links} external/>}
                </PageContent>
                <SearchPanel/>
            </Layout>
        )
    }

}