import fetch from 'isomorphic-unfetch'
import {apiHost} from '../config.js'

export const getServices = async () => {
    const res = await fetch(`${apiHost}/api/services?limit=10`) 
    return await res.json()
}

export const getServiceById = async (id) => {
    const res = await fetch(`${apiHost}/api/services/${id}`) 
    const service = await res.json()
    return {
        service: service
    }
}