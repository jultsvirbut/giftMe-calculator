jQuery(document).ready(function(){




var theForm=document.forms["itemform"];
    var item_prices = new Array();  
    item_prices["sweetmeats"]=30000;
    item_prices["candle"]=70000;
    item_prices["toy"]=50000;
    item_prices["cupwhite"]=70000;

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