import { SHOW_LOADER, ADD_NOTE, FETCH_NOTES, REMOVE_NOTE, SEARCH_NOTE } from "../types"

const handlers = {
    [SHOW_LOADER]: state => ({...state, loading: true}),
    [ADD_NOTE]: (state, {payload}) => ({
        ...state,  
        notes: [...state.notes, payload]
    }),
    [REMOVE_NOTE]: (state, {payload}) => ({
        ...state,
        notes: state.notes.filter(note => note.id !== payload)
    }),
    [FETCH_NOTES]: (state, {payload}) => ({...state, notes: payload, loading: false}),
    [SEARCH_NOTE]: (state, {payload}) => {
        const data = payload.split(' ')
        return {
            ...state,
            notes: state.notes.filter(note => note.title.split(' ').includes(data[0]))
        }
    },
    DEFAULT: state => state
}

export const firebaseReducer = (state, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT
    return handle(state, action)
}