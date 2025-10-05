//função para adicionar tarefas 
function addTarefa(){
    // pega elemento "texto"
const input = document.getElementById("texto")
//pega o valor que digitaram
 const valor = input.value.trim();
if (valor==="") return;

// cria uma div 
const bloco = document.createElement("div")

//cria um span que mostra o texto da tarefa
const novaTarefa = document.createElement("span")

//texto do span como texto digitado
novaTarefa.textContent = valor;
}