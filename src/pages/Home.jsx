import '../scss/app.scss'
import {Categories, SortPopup, PizzaBlock} from "../components";
import {useDispatch, useSelector} from "react-redux";
import * as React from "react";
import axios from "axios";
import {setPizzas} from "../redux/actions/pizzas";


export default function Home() {

    const state= useSelector(({pizzas}) =>{
        return {
            items:pizzas.items
        }
    })

    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    items={['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']}/>
                <SortPopup items={['популярности', 'цене', 'алфавиту']}/>
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

