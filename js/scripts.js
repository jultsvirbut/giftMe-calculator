jQuery(document).ready(function(){

var products = [
    { enName: 'sweet', ruName: 'Леденцы', price: '30000' },
    { enName: 'candle', ruName:'Свеча', price: '70000' },
    { enName: 'toy', ruName:'Игрушка', price: '50000' },
    { enName: 'cupwhite', ruName:'Чашка белая', price: '70000' },
    { enName: 'tea', ruName:'Кофе/Чай', price: '45000' },
    { enName: 'honey', ruName:'Мед', price: '50000' },
    { enName: 'notebook', ruName:'Блокнот в эко обложке', price: '50000' },
    { enName: 'carholder', ruName:'Визитница', price: '100000' },
    { enName: 'sleepmask', ruName:'Маска для сна', price: '120000' },
    { enName: 'ball', ruName:'Мяч антистресс', price: '45000' },
    { enName: 'cookie', ruName:'Имбирное печенье', price: '25000' },
    { enName: 'syrup', ruName:'Сироп в ассортименте', price: '130000' },
    { enName: 'cuptogo', ruName:'Чашка to go', price: '200000' },
    { enName: 'coloring', ruName:'Раскраска', price: '50000' },
    { enName: 'wine', ruName:'Чашка для глинтвейна', price: '60000' },
    { enName: 'spice', ruName:'Специи в мешочке', price: '40000' },
    { enName: 'cinnamon', ruName:'Палочки корицы', price: '20000' },
];


var form = $('#products-form');

function renderProductCheckbox(product){
    return $('<input/>', {
        type: 'checkbox', 
        name: product.enName, 
        id: product.enName,
        html: product.ruName,
        value: product.price
    })
}

function renderLabelForProductCheckbox(product) {
    var checkbox = renderProductCheckbox(product);   
    return $('<label/>', {
        for: product.enName,
        html: product.ruName
    }).prepend(checkbox);
}

products.forEach(function(product) {
    var labeledCheckbox = renderLabelForProductCheckbox(product);
    labeledCheckbox.appendTo(form);
});


function purchasePrice(){
var price=0;
var theForm=document.forms["itemform"];
var selectedItems=theForm.elements["selecteditem"];
   
    for(var i=0;i<selectedItems.length;i++){
        if (selectedItems[i].checked==true){
    price+=item_prices[selectedItems[i].value];
    console.log(price);
        }
    } 
    return price;
}

function calculateTotal()
{
   var Tprice = purchasePrice()*1.3 + 30000;

    var divobj = document.getElementById('totalPrice');
    divobj.style.display='block';
    divobj.innerHTML = "Цена набора "+Tprice+" BYR";

}

function hideTotal()
{
    var divobj = document.getElementById('totalPrice');
    divobj.style.display='none';
}


});