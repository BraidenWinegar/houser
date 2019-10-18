import axios from 'axios'
import {
    SAVE_INPUTS,
    SAVE_INPUTS_TO_DB,
    GET_HOUSES,
    CLEAR_INPUTS
} from './actionTypes'

const initialState = {
    inputs: [],
    output: []
}

export const saveInputs = (name, address, city, state, zip) => {
    let savedInputs = [name, address, city, state, zip]
    return {
        type: SAVE_INPUTS,
        payload: savedInputs
    }
}

export const saveInputsToDB = (inputs) => {
    let data = axios.post('/api/houses', inputs)
    .then(res => res.data)
    return {
        type: SAVE_INPUTS_TO_DB,
        payload: data
    }
}

export const clearInputs = () => {
    let data = []
    return {
        type: CLEAR_INPUTS,
        payload: data
    }
}

export const getHouses = () => {
    let data = axios.get('/api/houses')
    .then(res => res.data)
    .catch(err => console.log('getHouses', err))
    return{
        type: GET_HOUSES,
        payload: data
    }
}


export default function (state = initialState, action) {
    const { type, payload } = action
    switch (type) {
        case SAVE_INPUTS:
            return {...state, inputs: payload}
        case CLEAR_INPUTS:
            return {...state, inputs: payload}
        case SAVE_INPUTS_TO_DB + "_FULFILLED":
            return {...state}
        case GET_HOUSES + "_FULFILLED":
            return {...state, output: payload}
        default:
            return state
    }
}