import '../scss/app.scss'
import Cartitem from "../components/CartItem";
import {useSelector} from "react-redux";
import cart from "../redux/reducers/cart";



export default function Cart() {
const {items, totalPrice, totalCnt} = useSelector(state => state.cart)
    const pizzas = Object.keys(items).map(i => {
        return items[i][0]
    })
    console.log(pizzas)
    return (
        <div className="container container--cart">
                    <div className="cart">
                        <div className="content__items_cart">
                            {pizzas &&
                            pizzas.map(pizza =>{
                                return <Cartitem size={pizza.size} type={pizza.type} price={pizza.price} name={pizza.name} img={pizza.imageUrl}/>
                            }) }
                        </div>
                        <div className="cart__bottom">
                            <div className="cart__bottom-details">
                                <span> Всего пицц: <b>{totalCnt} шт.</b> </span>
                                <span> Сумма заказа: <b>{totalPrice} ₽</b> </span>
                            </div>
                            <div className="cart__bottom-buttons">
                                <a href="/" className="button button--outline button--add go-back-btn">
                                    <svg width="8" height="14" viewBox="0 0 8 14" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7 13L1 6.93015L6.86175 1" stroke="#D3D3D3" stroke-width="1.5"
                                              stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>

                                    <span>Вернуться назад</span>
                                </a>
                                <div className="button pay-btn">
                                    <span>Оплатить сейчас</span>
                                </div>
                            </div>
                        </div>
                    </div>

        </div>

        /* <div className="container container--cart">
             <div className="cart cart--empty">
                 <h2>Корзина пустая <span>😕</span></h2>
                 <p>
                     Вероятней всего, вы не заказывали ещё пиццу.<br/>
                     Для того, чтобы заказать пиццу, перейди на главную страницу.
                 </p>
                 <img src={empty_cart} alt="Empty cart"/>
                 <a href="/" className="button button--black">
                     <span>Вернуться назад</span>
                 </a>
             </div>
         </div>*/
    )
}

