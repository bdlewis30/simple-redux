// ACTION TYPES

const DELETE_TRAIL = "DELETE_TRAIL";
const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";

// ACTION CREATORS

export function deleteTrails(trailId) {
    return {
        type: DELETE_TRAIL,
        payload: trailId
    }
}

export function addToFavorites(favorite){
    return{
        type: ADD_TO_FAVORITES,
        payload: favorite
    }
}

// SWITCH

export default function reducer(state = initialState, action){
    
}