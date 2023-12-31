import "./styles/app.css"
import React from "react";
import Tasks from "./elements/Tasks";
import { base } from "./Router";
import { Link } from "react-router-dom";


function getData(){
  
  let data = JSON.parse(localStorage.getItem("tarefas"))
  if(data === null){return []}
  return data.tasks
}

function App() {

  function clearAll(){
    localStorage.removeItem("tarefas")
    window.location.reload(false)
    
  
  }


function CreateTasks(){
  let tarefas = getData()
  let result = []

    tarefas.map((element)=>{

      result.push(Tasks(element.prazo,element.titulo,element.descricao))
    })
  


 

  return  (result)
}



  return (

    <div id="container">

      <header>
        <h1>Lista de tarefas</h1>
      </header>

      <div id="content">
        <CreateTasks/>

     

        <Link to="/form"><a><button id="addTaskbtn" >+</button></a></Link>
      </div>



      <div id="footer">
        <input type="button" value="Limpar Tudo" onClick={clearAll} /></div>
    </div>

  );




}



export default App
export{getData}

