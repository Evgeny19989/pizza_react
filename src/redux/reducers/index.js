import filtersReducer from "./filters";
import pizzasReducer from "./pizzas";

const {combineReducers} = require("redux");
const rootReducer = combineReducers({
    filters:filtersReducer,
    pizzas:pizzasReducer
})

export default  rootReducer