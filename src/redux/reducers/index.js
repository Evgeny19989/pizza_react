import filters from "./filters";
import pizzas from "./pizzas";
import cart from "./cart";

const {combineReducers} = require("redux");
const rootReducer = combineReducers({
    filters,
    pizzas,
    cart,
})

export default  rootReducer