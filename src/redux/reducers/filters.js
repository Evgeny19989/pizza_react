const initialState = {
    category: 0,
    sortBy: 'popular'
}

const filters = (state = initialState, action) => {
    if (action.type === 'SET_SORT_BUY') {
        return {
            ...state,
            sortBy: action.payload
        }
    }
    if (action.type === 'SET_CATEGORY') {
        return {
            ...state,
            category: action.payload
        }
    }
    return state;
}

export default  filters