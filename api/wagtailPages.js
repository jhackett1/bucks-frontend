import fetch from 'isomorphic-unfetch'

// TODO: Abstract into config
const host = "http://localhost:8000"

export const getLifeEvents = async () => {
    const res = await fetch(`${host}/api/v2/pages/?type=lifeevents.LifeEventPage`) 
    return await res.json()
}

export const getPageById = async (id) => {
    const res2 = await fetch(`${host}/api/v2/pages/${id}`) 
    return await res2.json()
}

export const getPageBySlug = async (slug) => {
    // TODO: add proper error handling here
    const res = await fetch(`${host}/api/v2/pages?slug=${slug}`) 
    const results = await res.json()
    return await getPageById(results.items[0].id)
}

export const getPageByPath = async (path) => {
    const res = await fetch(`${host}/api/v2/pages/find/?html_path=${path}`) 
    return await res.json()
}