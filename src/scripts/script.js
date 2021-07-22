let comida_selecionada = 0;
let bebida_selecionada = 0;
let sobremesa_selecionada = 0;

function realizarPedido(){
    if(comida_selecionada > 0 && bebida_selecionada > 0 && sobremesa_selecionada > 0){
        const elemento = document.querySelector("button");
        elemento.removeAttribute("disabled");
        elemento.classList.add("botao-pedido-confirmacao");
        elemento.innerHTML = 'Fechar pedido';
    }
}

function teste(){
    alert("funcionando perfeitamente");
}

function selecionaComida(opcao) {
    if (comida_selecionada != 0) resetaOpcaoComida(opcao);

    let nome = ".comida" + opcao;
    const elemento = document.querySelector(nome);
    elemento.classList.add("opcao-selecionada-comida");
    const icone = document.querySelectorAll("ion-icon");
    icone[opcao-1].style.color = "#32B72F";
    comida_selecionada = opcao;
    realizarPedido();
}

function selecionaBebida(opcao) {
    if (bebida_selecionada != 0) resetaOpcaoBebida(opcao);
    let nome = ".bebida" + opcao;
    const elemento = document.querySelector(nome);
    elemento.classList.add("opcao-selecionada-bebida");
    const icone = document.querySelectorAll(".bebida");
    icone[opcao-1].style.color = "#32B72F";
    bebida_selecionada = opcao;
    realizarPedido();
}

function selecionaSobremesa(opcao) {
    if (sobremesa_selecionada != 0) resetaOpcaoSobremesa(opcao);
    let nome = ".sobremesa" + opcao;
    const elemento = document.querySelector(nome);
    elemento.classList.add("opcao-selecionada-sobremesa");
    const icone = document.querySelectorAll(".sobremesa");
    icone[opcao-1].style.color = "#32B72F";
    sobremesa_selecionada = opcao;
    realizarPedido();
}


function resetaOpcaoComida(opcao){
    const anterior = document.querySelector(".opcao-selecionada-comida");
    const anterior_checado = document.querySelectorAll("ion-icon");
    anterior.classList.remove("opcao-selecionada-comida");
    anterior_checado[comida_selecionada-1].style.color = "white";
}

function resetaOpcaoBebida(opcao){
    const anterior = document.querySelector(".opcao-selecionada-bebida");
    const anterior_checado = document.querySelectorAll(".bebida");
    anterior.classList.remove("opcao-selecionada-bebida");
    anterior_checado[bebida_selecionada-1].style.color = "white";
}

function resetaOpcaoSobremesa(opcao){
    const anterior = document.querySelector(".opcao-selecionada-sobremesa");
    const anterior_checado = document.querySelectorAll(".sobremesa");
    anterior.classList.remove("opcao-selecionada-sobremesa");
    anterior_checado[sobremesa_selecionada-1].style.color = "white";
}