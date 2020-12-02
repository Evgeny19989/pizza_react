import './scss/app.scss'
import {Route} from "react-router-dom";
import {Header} from './components'
import {Home, Cart} from './pages'
import * as React from "react";
import axios from 'axios'
import {useState} from "react";
import store from "./redux/store";


function App() {




    const [pizzas ,setPizzas] = useState([])

    React.useEffect(() => {
        axios.get('http://localhost:3000/db.json').then(({data})=>{
            setPizzas(data.pizzas)
            }

        )


    }, [])
    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Route exact path='/' render={() => <Home items={pizzas}/>}/>
                <Route exact path='/cart' render={Cart}/>
            </div>
        </div>

    );
}

export default App;
