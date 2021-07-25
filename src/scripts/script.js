let food_selecionada = 0;
let drink_selecionada = 0;
let dessert_selecionada = 0;
let order = "";

function releaseOrder(){
    if(food_selecionada > 0 && drink_selecionada > 0 && dessert_selecionada > 0){
        const button = document.querySelector("button");
        button.removeAttribute("disabled");
        button.classList.add("button-order-confirm");
        button.innerHTML = 'Fechar pedido';
    }
}

function releaseProduct(product, option){
    let previous_option;
    if(product === "food"){
        previous_option = food_selecionada;
        food_selecionada = option;
    }else if(product === "drink"){
        previous_option = drink_selecionada;
        drink_selecionada = option;
    }else{
        previous_option = dessert_selecionada;
        dessert_selecionada = option;
    }

    return previous_option;
}

function selectProduct(product, option){
    let previous_option = releaseProduct(product, option);
    if (previous_option != 0) resetOption(product, previous_option);

    let number_product = `.${product}${option}`;
    let class_product_selected = `selected-${product}-option`;
    let icon_item_selected = `.icon-${product}${option}`;

    document.querySelector(number_product).classList.add(class_product_selected);
    document.querySelector(icon_item_selected).style.color = "#32B72F";
    releaseOrder();
}

function resetOption(product, option){
    let class_product_selected = `selected-${product}-option`;
    let icon_item_selected = `.icon-${product}${option}`;
    const previous_product = document.querySelector("."+class_product_selected);
    previous_product.classList.remove(class_product_selected);
    document.querySelector(icon_item_selected).style.color = "#ffffff";
}

function convertValue(price){
    price = price.replace('R$ ','');
    price = price.replace(',','.');
    return Number(price);
}

function closeOrder() {
    let client_name = prompt("Informe o seu nome:");
    let client_address = prompt("Informe seu endereço:");

    const element_food = document.querySelector(".name-food" + food_selecionada);
    const element_drink = document.querySelector(".name-drink" + drink_selecionada);
    const element_dessert = document.querySelector(".name-dessert" + dessert_selecionada);

    const element_price_food = document.querySelector(".price-food" + food_selecionada);
    const element_price_drink = document.querySelector(".price-drink" + drink_selecionada);
    const element_price_dessert = document.querySelector(".price-dessert" + dessert_selecionada);
   
    let food_name = element_food.innerHTML
    let drink_name = element_drink.innerHTML
    let dessert_name = element_dessert.innerHTML

    let food_price = element_price_food.innerHTML;
    let drink_price = element_price_drink.innerHTML;
    let dessert_price = element_price_dessert.innerHTML;

    let amount = convertValue(food_price) + convertValue(drink_price) + convertValue(dessert_price);
    amount = amount.toFixed(2);

    const review_request = document.querySelector(".order-review");
    review_request.classList.toggle("hide");

    document.querySelector(".food-name").innerHTML = food_name;
    document.querySelector(".drink-name").innerHTML = drink_name;
    document.querySelector(".dessert-name").innerHTML = dessert_name;

    document.querySelector(".food-price").innerHTML = food_price;
    document.querySelector(".drink-price").innerHTML = drink_price;
    document.querySelector(".dessert-price").innerHTML = dessert_price;
    document.querySelector(".price-total").innerHTML = "<strong>R$ " + String(amount).replace('.',',')+"</strong>";

    order = `Olá, gostaria de fazer o pedido:\n` + `- Prato: ${food_name}\n` + 
    `- Bebida: ${drink_name}\n` + `- Sobremesa: ${dessert_name}\n` +
    `Total: R$ ${amount}\n\n`+ `Nome: ${client_name}\n`+`Endereço: ${client_address}\n`;
}

function sendOrder(){
    const url = "https://wa.me/5592994939981?text=" + encodeURIComponent(order);
    window.open(url);
}

function cancelOrder(){
    const review_request = document.querySelector(".order-review");
    review_request.classList.toggle("hide");
}
