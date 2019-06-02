import fetch from 'isomorphic-unfetch'
import {apiHost, homepageId} from '../config.js'

export const getHomepageContent = async () => {
    const endpoints = [
        // Life events
        `${apiHost}/api/v2/pages?type=lifeevents.LifeEvent&child_of=3&fields=*`,
        // Popular advice
        `${apiHost}/api/v2/pages/?type=lifeevents.GenericContent&fields=*`
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

export const getPageBySlug = async (slug) => {
    // TODO: add proper error handling here
    const res = await fetch(`${apiHost}/api/v2/pages?slug=${slug}`) 
    const results = await res.json()
    return await getPageById(results.items[0].id)
}

export const getPageByPath = async (path) => {
    const res = await fetch(`${apiHost}/api/v2/pages/find/?html_path=${path}`) 
    return await res.json()
}