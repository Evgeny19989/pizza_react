import '../scss/app.scss'

import {useDispatch, useSelector} from "react-redux";
import * as React from "react";

import {Categories, SortPopup, PizzaBlock} from "../components";
import {setCategory, setSortBuy} from "../redux/actions/filters";
import {fetchPizzas} from "../redux/actions/pizzas";
import PizzaLoader from "../components/PizzaLoader";
import {AddPizzaCart} from "../redux/actions/cart";

const categoryNames = ['Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые']
const sortItemNames = [
    {name: 'популярности', type: 'popular'},
    {name: 'цене', type: 'price'},
    {name: 'алфавиту', type: 'name'},
]

export default function Home() {
    const dispatch = useDispatch()
    const state = useSelector(({pizzas, cart}) => {
        return {
            items: pizzas.items,
            isLoaded: pizzas.isLoaded,
            cartItems: cart.items,
            totalCnt: cart.totalCnt
        }
    })

    const {category, sortBy} = useSelector(({filters}) => filters)

    React.useEffect(() => {
        dispatch(fetchPizzas(category, sortBy))
    }, [category, sortBy]);

    const onSelectedCategory = React.useCallback(
        (index) => {
            dispatch(setCategory(index))
        }, []
    )
    const onSelectedSort = React.useCallback(
        (type) => {
            dispatch(setSortBuy(type))
        }, []
    )

    const onAddPizza = (obj) => {
        dispatch(AddPizzaCart(obj))
    }

    return (
        <div className="container">
            <div className="content__top">
                <Categories activeCategory={category}
                            onClick={onSelectedCategory}
                            items={categoryNames}/>
                <SortPopup
                    activeSortBy={sortBy}
                    onClickSortType={onSelectedSort}
                    items={sortItemNames}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {state.isLoaded ? state.items.map(i => {
                        return <PizzaBlock addedPizzas={state.cartItems[i.id] && state.cartItems[i.id].items.length}
                                           onClickAddPizza={onAddPizza} key={i.id} {...i}   />
                    }) :
                    Array(12)
                        .fill(0)
                        .map((_, index) => <PizzaLoader key={index}/>)
                }
            </div>
        </div>
    )
}

