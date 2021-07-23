let comida_selecionada = 0;
let bebida_selecionada = 0;
let sobremesa_selecionada = 0;
let pedido = "";

function liberaPedido(){
    if(comida_selecionada > 0 && bebida_selecionada > 0 && sobremesa_selecionada > 0){
        const elemento = document.querySelector("button");
        elemento.removeAttribute("disabled");
        elemento.classList.add("botao-pedido-confirmacao");
        elemento.innerHTML = 'Fechar pedido';
    }
}

function selecionaComida(opcao) {
    if (comida_selecionada != 0) resetaOpcaoComida(opcao);

    let nome = ".comida" + opcao;
    const elemento = document.querySelector(nome);
    elemento.classList.add("opcao-selecionada-comida");
    const icone = document.querySelectorAll("ion-icon");
    icone[opcao-1].style.color = "#32B72F";
    comida_selecionada = opcao;
    liberaPedido();
}

function selecionaBebida(opcao) {
    if (bebida_selecionada != 0) resetaOpcaoBebida(opcao);

    let nome = ".bebida" + opcao;
    const elemento = document.querySelector(nome);
    elemento.classList.add("opcao-selecionada-bebida");
    const icone = document.querySelectorAll(".bebida");
    icone[opcao-1].style.color = "#32B72F";
    bebida_selecionada = opcao;
    liberaPedido();
}

function selecionaSobremesa(opcao) {
    if (sobremesa_selecionada != 0) resetaOpcaoSobremesa(opcao);

    let nome = ".sobremesa" + opcao;
    const elemento = document.querySelector(nome);
    elemento.classList.add("opcao-selecionada-sobremesa");
    const icone = document.querySelectorAll(".sobremesa");
    icone[opcao-1].style.color = "#32B72F";
    sobremesa_selecionada = opcao;
    liberaPedido();
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

function trataValorPedido(valor){
    valor = valor.replace('R$ ','');
    valor = valor.replace(',','.');
    return Number(valor);
}

function fecharPedido() {
    let nome_cliente = prompt("Informe o seu nome:");
    let endereco_cliente = prompt("Informe seu endereço:");

    const element_comida = document.querySelector(".nome-comida" + comida_selecionada);
    const element_bebida = document.querySelector(".nome-bebida" + bebida_selecionada);
    const element_sobremesa = document.querySelector(".nome-sobremesa" + sobremesa_selecionada);

    const element_preco_comida = document.querySelector(".preco-comida" + comida_selecionada);
    const element_preco_bebida = document.querySelector(".preco-bebida" + bebida_selecionada);
    const element_preco_sobremesa = document.querySelector(".preco-sobremesa" + sobremesa_selecionada);
   
    let nome_comida = element_comida.innerHTML
    let nome_bebida = element_bebida.innerHTML
    let nome_sobremesa = element_sobremesa.innerHTML

    let valor_comida = element_preco_comida.innerHTML;
    let valor_bebida = element_preco_bebida.innerHTML;
    let valor_sobremesa = element_preco_sobremesa.innerHTML;

    let valor_total = trataValorPedido(valor_comida) + trataValorPedido(valor_bebida) + trataValorPedido(valor_sobremesa);
    valor_total = valor_total.toFixed(2);

    pedido = `Olá, gostaria de fazer o pedido:\n` + `- Prato: ${nome_comida}\n` + 
             `- Bebida: ${nome_bebida}\n` + `- Sobremesa: ${nome_sobremesa}\n` +
             `Total: R$ ${valor_total}\n\n`+ `Nome: ${nome_cliente}\n`+`Endereço: ${endereco_cliente}\n`;

    const elem_revisa_pedido = document.querySelector(".revisa-pedido");
    elem_revisa_pedido.classList.toggle("esconder");

    document.querySelector(".nome-comida").innerHTML = nome_comida;
    document.querySelector(".nome-bebida").innerHTML = nome_bebida;
    document.querySelector(".nome-sobremesa").innerHTML = nome_sobremesa;

    document.querySelector(".preco-comida").innerHTML = valor_comida;
    document.querySelector(".preco-bebida").innerHTML = valor_bebida;
    document.querySelector(".preco-sobremesa").innerHTML = valor_sobremesa;
    document.querySelector(".preco-total").innerHTML = "<strong>R$ " + String(valor_total).replace('.',',')+"</strong>";
}

function enviarPedido(){
    const url = "https://wa.me/5592994939981?text=" + encodeURIComponent(pedido);
    window.open(url);
}

function cancelarPedido(){
    const elem_revisa_pedido = document.querySelector(".revisa-pedido");
    elem_revisa_pedido.classList.toggle("esconder");
}
