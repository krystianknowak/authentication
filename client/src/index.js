import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";

import { reducers } from './reducers'
import { App } from "./components/App";
import { Welcome } from './components/Welcome';
import { Feature } from './components/Feature';
import Signout from './components/auth/Signout';
import Signup from './components/auth/Signup';
import Signin from './components/auth/Signin';

const store = createStore(
    reducers,
    {
        auth: { authenticated: localStorage.getItem("token") }
    },
    applyMiddleware(reduxThunk)
);

const AppProviders = () => (
    <Provider store={store}>
        <BrowserRouter>
            <App>
                <Route path="/" exact component={Welcome} />
                <Route path="/signup" exact component={Signup} />
                <Route path="/signout" exact component={Signout} />
                <Route path="/signin" exact component={Signin} />
                <Route path="/feature" exact component={Feature} />
            </App>
        </BrowserRouter>
    </Provider>
);

ReactDom.render(<AppProviders />, document.querySelector("#root"));