import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import enUS from "antd/lib/locale-provider/en_US";
import {LocaleProvider, BackTop} from "antd";
import {Provider} from "react-redux";
import {Router} from "react-router";
import configureStore from "/core/store";
import routes from "/core/routes";

const {store, history} = configureStore();

ReactDOM.render(
    <div>
        <BackTop />
        <Provider store={store}>
            <LocaleProvider locale={enUS}>
                <Router history={history} routes={routes(store.getState)}/>
            </LocaleProvider>
        </Provider>
    </div>,
    document.getElementById('root')
);
