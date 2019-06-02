import fetch from 'isomorphic-unfetch'
import {apiHost, homepageId} from '../config.js'

export const getHomepageContent = async () => {
    const endpoints = [
        // Life events
        `${apiHost}/api/v2/pages?type=lifeevents.LifeEventPage&child_of=3&fields=*`,
        // Popular advice
        `${apiHost}/api/v2/pages/?type=lifeevents.GenericContentPage&fields=*&popular=true`
    ]
    return await Promise.all(endpoints.map(endpoint =>
        fetch(endpoint)
            .then(res => res.json())    
    ))
    .then(items => {
        return items
    })
}

export const getPageById = async (id) => {
    const res2 = await fetch(`${apiHost}/api/v2/pages/${id}`) 
    return await res2.json()
}

export const getPageByPath = async (path) => {
    const res = await fetch(`${apiHost}/api/v2/pages/find/?html_path=${path}`) 
    return await res.json()
}

export const getChildrenById = async (id) => {
    const res = await fetch(`${apiHost}/api/v2/pages?type=lifeevents.GenericContentPage&fields=*&child_of=${id}`) 
    return await res.json()
}