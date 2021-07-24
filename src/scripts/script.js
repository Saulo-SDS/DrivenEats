let food_selecionada = 0;
let drink_selecionada = 0;
let dessert_selecionada = 0;
let pedido = "";

function liberaPedido(){
    if(food_selecionada > 0 && drink_selecionada > 0 && dessert_selecionada > 0){
        const elemento = document.querySelector("button");
        elemento.removeAttribute("disabled");
        elemento.classList.add("button-order-confirm");
        elemento.innerHTML = 'Fechar pedido';
    }
}

function selectProduct(produto, opcao){
    
    let opcao_aterior;
    if(produto === "food"){
        opcao_aterior = food_selecionada;
        food_selecionada = opcao;
    }else if(produto === "drink"){
        opcao_aterior = drink_selecionada;
        drink_selecionada = opcao;
    }else{
        opcao_aterior = dessert_selecionada;
        dessert_selecionada = opcao;
    }

    if (opcao_aterior != 0) resetaOpcao(produto, opcao_aterior);

    let numero_produto = `.${produto}${opcao}`;
    let classe_produto_selecionado = `selected-${produto}-option`;
    let icon_item_selected = `.icon-${produto}${opcao}`;

    console.log(numero_produto);
    document.querySelector(numero_produto).classList.add(classe_produto_selecionado);
    document.querySelector(icon_item_selected).style.color = "#32B72F";
    liberaPedido();
}


function resetaOpcao(produto, opcao){
    let classe_produto_selecionado = `selected-${produto}-option`;
    let icon_item_selected = `.icon-${produto}${opcao}`;
    const anterior = document.querySelector("."+classe_produto_selecionado);
    anterior.classList.remove(classe_produto_selecionado);
    document.querySelector(icon_item_selected).style.color = "#ffffff";
}

function selecionaComida(opcao) {
    if (food_selecionada != 0) resetaOpcaoComida(opcao);

    let nome = ".food" + opcao;
    const elemento = document.querySelector(nome);
    elemento.classList.add("selected-food-option");
    const icone = document.querySelector(".icon-food"+opcao);
    icone.style.color = "#32B72F";
    food_selecionada = opcao;
    liberaPedido();
}

function selecionaBebida(opcao) {
    if (drink_selecionada != 0) resetaOpcaoBebida(opcao);

    let nome = ".drink" + opcao;
    const elemento = document.querySelector(nome);
    elemento.classList.add("selected-drink-option");
    const icone = document.querySelector(".icon-drink"+opcao);
    icone.style.color = "#32B72F";
    drink_selecionada = opcao;
    liberaPedido();
}

function selecionaSobremesa(opcao) {
    if (dessert_selecionada != 0) resetaOpcaoSobremesa(opcao);

    let nome = ".dessert" + opcao;
    const elemento = document.querySelector(nome);
    elemento.classList.add("selected-dessert-option");
    const icone = document.querySelector(".icon-dessert"+opcao);
    icone.style.color = "#32B72F";
    dessert_selecionada = opcao;
    liberaPedido();
}

function resetaOpcaoComida(opcao){
    const anterior = document.querySelector(".selected-food-option");
    anterior.classList.remove("selected-food-option");
    document.querySelector(".icon-food"+food_selecionada).style.color = "#ffffff";
}

function resetaOpcaoBebida(opcao){
    const anterior = document.querySelector(".selected-drink-option");
    anterior.classList.remove("selected-drink-option");
    document.querySelector(".icon-drink"+drink_selecionada).style.color = "#ffffff";
}

function resetaOpcaoSobremesa(opcao){
    const anterior = document.querySelector(".selected-dessert-option");
    anterior.classList.remove("selected-dessert-option");
    document.querySelector(".icon-dessert"+dessert_selecionada).style.color = "#ffffff";
}

function trataValorPedido(valor){
    valor = valor.replace('R$ ','');
    valor = valor.replace(',','.');
    return Number(valor);
}

function closeOrder() {
    let nome_cliente = prompt("Informe o seu nome:");
    let endereco_cliente = prompt("Informe seu endereço:");

    const element_food = document.querySelector(".name-food" + food_selecionada);
    const element_drink = document.querySelector(".name-drink" + drink_selecionada);
    const element_dessert = document.querySelector(".name-dessert" + dessert_selecionada);

    const element_price_food = document.querySelector(".price-food" + food_selecionada);
    const element_price_drink = document.querySelector(".price-drink" + drink_selecionada);
    const element_price_dessert = document.querySelector(".price-dessert" + dessert_selecionada);
   
    let nome_food = element_food.innerHTML
    let nome_drink = element_drink.innerHTML
    let nome_dessert = element_dessert.innerHTML

    let valor_food = element_price_food.innerHTML;
    let valor_drink = element_price_drink.innerHTML;
    let valor_dessert = element_price_dessert.innerHTML;

    let valor_total = trataValorPedido(valor_food) + trataValorPedido(valor_drink) + trataValorPedido(valor_dessert);
    valor_total = valor_total.toFixed(2);

    pedido = `Olá, gostaria de fazer o pedido:\n` + `- Prato: ${nome_food}\n` + 
             `- Bebida: ${nome_drink}\n` + `- Sobremesa: ${nome_dessert}\n` +
             `Total: R$ ${valor_total}\n\n`+ `Nome: ${nome_cliente}\n`+`Endereço: ${endereco_cliente}\n`;

    const elem_revisa_pedido = document.querySelector(".order-review");
    elem_revisa_pedido.classList.toggle("esconder");

    document.querySelector(".name-food").innerHTML = nome_food;
    document.querySelector(".name-drink").innerHTML = nome_drink;
    document.querySelector(".name-dessert").innerHTML = nome_dessert;

    document.querySelector(".price-food").innerHTML = valor_food;
    document.querySelector(".price-drink").innerHTML = valor_drink;
    document.querySelector(".price-dessert").innerHTML = valor_dessert;
    document.querySelector(".price-total").innerHTML = "<strong>R$ " + String(valor_total).replace('.',',')+"</strong>";
}

function sendOrder(){
    const url = "https://wa.me/5592994939981?text=" + encodeURIComponent(pedido);
    window.open(url);
}

function cancelOrder(){
    const elem_revisa_pedido = document.querySelector(".order-review");
    elem_revisa_pedido.classList.toggle("esconder");
}
