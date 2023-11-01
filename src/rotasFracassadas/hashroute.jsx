import { HashRouter, Route, Link } from "react-router-dom";
import Form from "../elements/Form";
import App from "../App";
import React from "react";

function HashRotas() {
    return (
        <HashRouter basename="/lista-de-tarefas">
            
            <Route exact path="/" component={App} />
            <Route path="/form" component={Form} />

        </HashRouter>
    )
}

export default HashRotas

