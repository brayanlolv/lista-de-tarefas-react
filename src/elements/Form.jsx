import React from "react";
import "../styles/form.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";




function Form(teste) {

    const navigate = useNavigate();

    function goHome(){
        navigate("/")
    }


    let [prazo,setPrazo] = useState("")
    let [titulo,setTitulo] = useState("")
    let [descricao,setDescricao]=useState("")


    
    function cadastrar() {

    let objeto = JSON.parse(localStorage.getItem("tarefas"))

    if(objeto == null){
        objeto = {
            tasks:[]
        }
    }
    if(![prazo,titulo,descricao].includes("",null,undefined)){

        let newTask = {
            prazo:prazo,
            titulo:titulo,
            descricao:descricao
        }

        

        let array = objeto.tasks
     
            array.push(newTask);

            localStorage.setItem("tarefas",JSON.stringify(objeto))
            console.log([prazo,titulo,descricao])
      
     

      
      
        goHome()

    }

    }

    

    return (
        <form id="criar-task" >
        
            <a href="/"><div id="fundo" ></div></a>

            <div id="form-criando">
                criar tarefa
                <input type="text" placeholder="prazo" name="prazo" value={prazo} onChange={(e)=>{setPrazo(e.target.value)}}/>
                <input type="text" placeholder="titulo" name="titulo"  onChange={(e)=>{setTitulo(e.target.value)}} />
                <input type="textarea" placeholder="descrição" name="descricao"   onChange={(e)=>{setDescricao(e.target.value)}}  />
                <input type="button" value="enviar" onClick={cadastrar} />
            </div>



        </form>
    );
}

export default Form