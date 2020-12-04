import './scss/app.scss'
import {Route} from "react-router-dom";
import {Header} from './components'
import {Home, Cart} from './pages'
import * as React from "react";
import {useDispatch} from "react-redux";
import axios from "axios";
import {setPizzas} from "./redux/actions/pizzas";


function App() {
    const dispatch = useDispatch()
    React.useEffect(() => {
        axios.get('http://localhost:3000/db.json').then(({data}) => {
                dispatch(setPizzas(data.pizzas))

            }
        )
    }, []);

    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Route exact path='/' component={Home}/>
                <Route exact path='/cart' component={Cart}/>
            </div>
        </div>

    );
}


export default App
