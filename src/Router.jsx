import React from "react";
import Form from "./elements/Form";
import App from "./App";
import {createBrowserRouter,} from "react-router-dom";

const routes = createBrowserRouter([

    {
        path: "/",
        element: <App />,
    },
    {
        path: "/form",
        element: <div> <App/> <Form /></div>,

    }

])

export default routes