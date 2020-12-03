const initialState = {
    item: [],
    isLoaded: false
}

const pizzas = (state = initialState, action) => {
    if (action.type === 'SET_PIZZAS') {
        return {
            ...state,
            item: action.payload
        }
    }
    return state;
}

export default pizzas