import "./../styles/tasks.css"
import React from "react"
import { getData } from "../App";

function Tasks(deadline, title, descricao) {

    function Descricao() {


        return (
            <div class="descricao">
                {descricao}
            </div>
        );
    }



    function apagar() {

        let Tasks = getData()
        console.log(Tasks)
     
            let index, i = -1
            Tasks.map((task) => {
                i++
                if (task.titulo == title) {
                    index = i
                }
            })
    
            Tasks.splice(index, 1) //(index, quanto vai tirar)

            let obs = {
                "tasks":Tasks
            }
            
            localStorage.setItem("tarefas",JSON.stringify(obs))
           window.location.reload(false)//refresh
        

        //console.log(index)



   
    }


    return (
        <div class="taskGeneral">
            <div class="taskelements">
                <div class="deadline">
                    {deadline}
                </div>
                <div class="title" >
                    {title}
                </div>
                <div class="buttons" onClick={apagar}>
                    botao
                </div>
            </div>
            <Descricao />

        </div>
    )

}
export default Tasks