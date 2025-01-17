import '../scss/app.scss'
import React from 'react'
import {useState} from "react";

const Categories = React.memo(
    function Categories({items, onClick, activeCategory}) {

        const [activeClass, setActiveClass] = useState(activeCategory)

        const onSelectedItem = (index) => {
            setActiveClass(index)
            onClick(index)
        }

        return (
            <div className="categories">
                <ul>
                    <li onClick={() => {
                        onSelectedItem(null)
                    }} className={activeClass === null ? 'active' : ''}>Все
                    </li>
                    {items &&
                    items.map((i, index) => {
                        return <li className={activeClass === index ? 'active' : ''} onClick={() => {
                            onSelectedItem(index)
                        }} key={`${i}_${index}`}>{i}</li>
                    })
                    }
                </ul>
            </div>
        )
    }
)

export default Categories