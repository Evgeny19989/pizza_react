export const AddPizzaCart = (pizzaObj) => ({
    type: 'ADD_PIZZA_CART',
    payload: pizzaObj
})

export const ClearCart = () => ({
    type: 'CLEAR_CART',

})


export const RemoveItem = (id) => ({
    type: 'REMOVE_ITEM',
    payload: id
})