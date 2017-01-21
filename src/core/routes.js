import React from "react";
import {Route, IndexRedirect} from "react-router";
import App from "/App";
import PageNotFound from "/PageNotFound";
import {
    MenuAList
    , MenuAForm
} from '/menuA';
const routes = (getState) => (
    <Route path="/" component={App}>
        <IndexRedirect to={"menuA"}/>
        <Route path="menuA" component={MenuAList}/>
        <Route path="/menuA/form" component={MenuAForm}/>
        <Route path="/menuA/:id" component={MenuAForm}/>
        <Route path="*" component={PageNotFound}/>
    </Route>
);
export default routes;