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
    return;
}

export default  filters