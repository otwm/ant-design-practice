import {compose, applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import {browserHistory} from 'react-router';
import {reduxReactFirebase, firebaseStateReducer} from 'redux-react-firebase'
import firebaseConfig from './firebaseConfig'
import {syncHistoryWithStore,routerMiddleware, push} from 'react-router-redux'
import createLogger from 'redux-logger';
import reducers from "./reducers";

const middleware = routerMiddleware(browserHistory);

const createStoreWithFirebase = compose(
    reduxReactFirebase(firebaseConfig),
    applyMiddleware(createLogger(), thunk, middleware),
)(createStore);

export default function configureStore(initialState) {
    const store = createStoreWithFirebase(reducers, initialState);
    const history = syncHistoryWithStore(browserHistory, store);

    if (module.hot) {
        module.hot.accept('./reducers', () =>
            store.replaceReducer(require('./reducers').default)
        );
    }

    return {store, history};
}
