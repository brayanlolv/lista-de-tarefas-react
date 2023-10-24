async  function getTasks() {

    const dados = Cookies.get("tasks")
    console.log(Cookies.get("tasks"))
  
    }
  



    //cadastrar
    let tasksArray = Cookies.get("tasks");
    if(tasksArray===null || tasksArray === undefined){
        tasksArray= []
    }

    let newTask = {
        prazo:prazo,
        titulo:titulo,
        descricao:descricao
    }

    // tasksArray.push(newTask)
    Cookies.set(titulo,newTask)

    
    console.log("cadastrando")
    func1()
 