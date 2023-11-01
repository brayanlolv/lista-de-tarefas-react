import {createHashRouter,RouterProvider} from 'react-router-dom'
import React from "react";
import Form from "../elements/Form";
import App from "../App";
import { base } from '../Router';

const hashRoutes = createHashRouter([
    {
        path: base+"/",
        element: <App />,
    },
    {
        path: base+"/form",
        element: <div> <App/> <Form /></div>,
    },
    {  path:"/lista-de-tarefas/teste",
         element: <div>teste</div>
    }

])

export default hashRoutes