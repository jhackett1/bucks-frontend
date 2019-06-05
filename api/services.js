import fetch from 'isomorphic-unfetch'
import {apiHost} from '../config.js'

export const getServices = async () => {
    const res = await fetch(`${apiHost}/api/services`) 
    return await res.json()
}