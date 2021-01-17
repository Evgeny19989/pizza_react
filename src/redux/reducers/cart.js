const initialState = {
    items: {},
    totalPrice: 0,
    totalCnt: 0
}

const _get = (obj, path) => {
    const [firstKey, ...keys] = path.split('.');
    return keys.reduce((val, key) => {
        return val[key];
    }, obj[firstKey]);
};

const getTotalSum = (obj, path) => {
    return Object.values(obj).reduce((sum, obj) => {
        const value = _get(obj, path);
        return sum + value;
    }, 0);
};
const getTotalPrice = arr => arr.reduce((sum, obj) => obj.price + sum, 0)
const cart = (state = initialState, action) => {
    if (action.type === 'ADD_PIZZA_CART') {

        const currentPizzaItems = !state.items[action.payload.id]
            ? [action.payload]
            : [...state.items[action.payload.id].items, action.payload];

        const newItems = {
            ...state.items,
            [action.payload.id]: {
                items: currentPizzaItems,
                totalPrice: getTotalPrice(currentPizzaItems),
            },
        };

        const totalCount = getTotalSum(newItems, 'items.length');
        const totalPrice = getTotalSum(newItems, 'totalPrice');

        return {
            ...state,
            items: newItems,
            totalCnt: totalCount,
            totalPrice
        }
    }
    if (action.type === 'SET_TOTAL_PRICE') {
        return {
            ...state,
            totalPrice: action.payload
        }
    }
    if (action.type === 'CLEAR_CART') {
        return { totalPrice :0 ,totalCnt:0 ,items:[]}

    }
    if (action.type === 'SET_TOTAL_CNT') {
        return {
            ...state,
            totalCnt: action.payload
        }
    }
    if (action.type === 'REMOVE_ITEM') {
        const newObject = {
            ...state.items,
        }
        const currentTotalPrice = newObject[action.payload].totalPrice
        const currentTotalCnt = newObject[action.payload].items.length
        delete newObject[action.payload]
        return {
            ...state,
            items:newObject,
            totalPrice:state.totalPrice - currentTotalPrice,
            totalCnt: state.totalCnt - currentTotalCnt
        }
    }
    return state;
}

export default cart