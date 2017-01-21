import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";
import {firebaseStateReducer} from "redux-react-firebase";

export default combineReducers({
    routing: routerReducer,
    firebase: firebaseStateReducer
});