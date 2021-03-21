import produce from 'immer'

const initialState = {
    items: [],
    isLoaded: false
}

const pizzas = produce((draft, action) => {
    if (action.type === 'SET_PIZZAS') {
        draft.items = action.payload
        draft.isLoaded = true
    }
    if (action.type === 'SET_LOADED') {
        draft.isLoaded = action.payload
    }

}, initialState)

export default pizzas