import "./styles/app.css"
import React from "react";
import Tasks from "./elements/Tasks";


function getData(){
  
  let data = JSON.parse(localStorage.getItem("tarefas"))
  if(data === null){return []}
  return data.tasks
}
  // "start": "react-scripts start",
    // "build": "react-scripts build",
    //o q eu tirei do package 

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

     

        <a href="/form"><button id="addTaskbtn" >+</button></a>
      </div>



      <div id="footer">div
        <input type="button" value="clear All" onClick={clearAll} /></div>
    </div>

  );




}



export default App
export{getData}

