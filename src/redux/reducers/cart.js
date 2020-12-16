const initialState = {
    items: {},
    totalPrice: 0,
    totalCnt: 0
}

const cart = (state = initialState, action) => {
    if (action.type === 'ADD_PIZZA_CART') {
        return {
            ...state,
            items: {
                [action.payload.id]: [...state.items[action.payload.id], action.payload]
            }
        }
    }
    if (action.type === 'SET_TOTAL_PRICE') {
        return {
            ...state,
            totalPrice: action.payload
        }
    }
    if (action.type === 'SET_TOTAL_CNT') {
        return {
            ...state,
            totalCnt: action.payload
        }
    }
    return state;
}

export default cart