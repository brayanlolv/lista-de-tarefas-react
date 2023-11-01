import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Form from "./elements/Form";
import App from "./App";


function NewRoutes(){

return(

    <body>
        <BrowserRouter>
            <Routes basename="/lista-de-tarefas-react">
                <Route exact path="/lista-de-tarefas-react" element={<App/>}/>
                <Route path="/form" element={ <div><App/> <Form/></div> } />
            </Routes>
        </BrowserRouter>


    </body>



)

}

export default NewRoutes