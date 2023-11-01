// import {createHashRouter,RouterProvider,Switch} from 'react-router-dom'
import { Route, Switch, Link } from "react-router-dom";
import Form from "../elements/Form";
import App from "../App";

function Swit(){
    render(
     <Switch>
        <Route exact path="/">
          <App/>
        </Route>

        <Route path="/form">
           <App/><Form/>
        </Route>
      </Switch>
    )
}

export default Swit