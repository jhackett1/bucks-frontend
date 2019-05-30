import fetch from 'isomorphic-unfetch'

const host = "http://localhost:8000"

export const getLifeEvents = async () => {
    const res = await fetch(`${host}/api/v2/pages/?type=lifeevents.LifeEventPage`) 
    const data = await res.json()
    return data
}

export const getPageById = async (id) => {
    const res2 = await fetch(`${host}/api/v2/pages/${id}`) 
    const data = await res2.json()
    return data
}

export const getPageBySlug = async (slug) => {
    const res = await fetch(`http://localhost:8000/api/v2/pages?slug=${slug}`) 
    const results = await res.json()
    return await getPageById(results.items[0].id)
}