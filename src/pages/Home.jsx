import '../scss/app.scss'
import {Categories, SortPopup, PizzaBlock} from "../components";
import {useDispatch, useSelector} from "react-redux";
import * as React from "react";
import {setCategory, setSortBuy} from "../redux/actions/filters";
const categoryNames = ['Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые']
const sortItemNames = [
    {name: 'популярности', type:'popular'},
    {name: 'цене', type:'price'},
    {name: 'алфавиту', type:'alphabet'},
]

export default function Home() {
    const dispatch = useDispatch()
    const state= useSelector(({pizzas}) =>{
        return {
            items:pizzas.items
        }
    })

    const onSelectedCategory = React.useCallback(
        (index) =>{
            dispatch(setCategory(index))
        } ,[]
    )
    const onSelectedSort = React.useCallback(
        (type) =>{
            dispatch(setSortBuy(type))
        } ,[]
    )

    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    onClick={onSelectedCategory}
                    items={categoryNames}/>
                <SortPopup
                    onClick={onSelectedSort}
                    items={sortItemNames}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {state.items.map(i => {
                    return <PizzaBlock key={i.id} {...i}  />
                })}

            </div>
        </div>
    )
}

