 import '../scss/app.scss'
import {useState} from "react";
import classNames from 'classnames'
import PropTypes from 'prop-types'
import Button from "./Button";

function PizzaBlock({id,price, name, imageUrl, types ,sizes ,onClickAddPizza,addedPizzas}) {

    const [activeType, setActiveType] = useState(types[0])
    const [activeSize, setActiveSize] = useState(sizes[0])

    const typeNames = ['тонкое' , 'традиционное'];
    const availableSizes = [26 , 30 , 40];

    const onAddPizaa =() =>{
        const obj = {
            id,
            price,
            name,
            imageUrl,
            type:typeNames[activeType],
            size: activeSize
        }
       onClickAddPizza(obj)
    }

    return (
        <div className="pizza-block">
            <img
                className="pizza-block__image"
                src={imageUrl}
                alt="Pizza"
            />
            <h4 className="pizza-block__title">{name}</h4>
            <div className="pizza-block__selector">
                <ul>
                    {typeNames.map((i , index) =>{
                       return  <li key={i} className={classNames({
                           active:activeType === index,
                           disabled:!types.includes(index)
                       })} onClick={() => {
                           setActiveType(index)}}>{i}</li>
                    })}
                </ul>
                <ul>
                    {availableSizes.map((i , index) =>{
                        return  <li   key={i} className={classNames({
                            active:activeSize === i,
                            disabled:!sizes.includes(i)
                        })} onClick={() => {
                            setActiveSize(i)}}>{i} см.</li>
                    })}
                </ul>
            </div>
            <div className="pizza-block__bottom">
                <div className="pizza-block__price">от {price} ₽</div>
                <Button onClick={onAddPizaa} outline className='button--add'>
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                            fill="white"
                        />
                    </svg>
                    <span>Добавить</span>
                    <i>{addedPizzas}</i>
                </Button>
            </div>
        </div>
    );
}



PizzaBlock.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
    types: PropTypes.arrayOf(PropTypes.number).isRequired,
    sizes: PropTypes.arrayOf(PropTypes.number).isRequired,
    onClickAddPizza: PropTypes.func,
}

export default PizzaBlock