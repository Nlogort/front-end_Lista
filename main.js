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

//criando botao de remover
const btnRemover = document.createElement("button")

//texto como botão ("X")
btnRemover.textContent = "X";

btnRemover.onclick = function(){
//remove o container da tarefa 
    bloco.remove();
};
//adiciona texto da tarefa no conteiner
bloco.appendChild(novaTarefa);
// adiciona botao de remover no conteiner
bloco.appendChild(btnRemover);

//adiciona container completo na lista
document.getElementById("tarefas").appendChild(bloco);
//limpa input
input.value = ""
}

// usando enter
document.getElementById("texto").addEventListener("keydown", function(event) {
if (event.key ==="Enter"){
    addTarefa();
}
})