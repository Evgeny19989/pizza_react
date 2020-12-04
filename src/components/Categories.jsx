import '../scss/app.scss'
import React from 'react'
import {useState} from "react";
/*import classNames from 'classnames'*/

const Categories = React.memo(
    function Categories({items, onClick}) {
        const [activeClass, setActiveClass] = useState(null)

        const onSelectedItem = (index) => {
            setActiveClass(index)
            onClick(index)
        }

        console.log("RERENDER")
        return (
            <div className="categories">
                <ul>
                    <li onClick={() => {
                        setActiveClass(null)
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