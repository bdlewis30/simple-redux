import { createStore } from 'redux';

function reducer(state) {
    return state
}

var initialState = {
    searchResults: [],
    name: '',
    city: '',
    state: '',
    description: '',
    // map: `https://www.google.com/maps/@${initialState.latitude},${initialState.longitude},15z`,
    latitude: 0,
    longitude: 0,
    id: 0
}

export default createStore(reducer, initialState)