import produce from 'immer'

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
const cart = produce((draft , action) => {
    if (action.type === 'ADD_PIZZA_CART') {

        const currentPizzaItems = !draft.items[action.payload.id]
            ? [action.payload]
            : [...draft.items[action.payload.id].items, action.payload];

        const newItems = {
            ...draft.items,
            [action.payload.id]: {
                items: currentPizzaItems,
                totalPrice: getTotalPrice(currentPizzaItems),
            },
        };

        const totalCount = getTotalSum(newItems, 'items.length');
        const totalPrice = getTotalSum(newItems, 'totalPrice');

        draft.items = newItems
        draft.totalCnt = totalCount
        draft.totalPrice = totalPrice
    }

    if (action.type === 'SET_TOTAL_PRICE') {
        draft.totalPrice = action.payload
    }

    if (action.type === 'CLEAR_CART') {
        draft.totalPrice = 0
        draft.totalCnt = 0
        draft.items = []
    }
    if (action.type === 'SET_TOTAL_CNT') {
        draft.totalCnt = action.payload
    }

    if (action.type === 'REMOVE_ITEM') {
        const newObject = {
            ...draft.items,
        }
        const currentTotalPrice = newObject[action.payload].totalPrice
        const currentTotalCnt = newObject[action.payload].items.length
        delete newObject[action.payload]

        draft.items = newObject
        draft.totalPrice = draft.totalPrice - currentTotalPrice
        draft.totalCnt = draft.totalCnt - currentTotalCnt
    }
},initialState)

export default cart