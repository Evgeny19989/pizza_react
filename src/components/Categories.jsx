import '../scss/app.scss'
import {useState} from "react";
/*import classNames from 'classnames'*/

export default function Categories({items, onClick}) {
    const [activeClass, setActiveClass] = useState(null)

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
                            setActiveClass(index)
                        }} key={`${i}_${index}`}>{i}</li>
                    })
                }

            </ul>
        </div>
    )
}


