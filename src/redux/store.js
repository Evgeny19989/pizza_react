import {createStore} from 'redux'

let initialState = {}

function storeReducer(state = initialState, action) {
    switch (action.type) {
        case 'HELLO':
            console.log("action_hello")
            break;
        default:
            break
    }
}

const store = createStore(storeReducer)

export default store