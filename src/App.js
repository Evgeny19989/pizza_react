import './scss/app.scss'
import {Route} from "react-router-dom";
import * as React from "react";

import {Header} from './components'
import {Home, Cart} from './pages'

function App() {

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
