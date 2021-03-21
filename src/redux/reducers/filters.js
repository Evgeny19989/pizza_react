import produce from 'immer'

const initialState = {
    category: null,
    sortBy: 'popular'
}

const filters = produce((draft, action) => {
    if (action.type === 'SET_SORT_BUY') {
        draft.sortBy = action.payload
    }

    if (action.type === 'SET_CATEGORY') {
        draft.category = action.payload
    }

}, initialState)

export default filters