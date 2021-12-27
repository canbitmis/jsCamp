function addToCart(productName,quantity) {
     console.log("Sepete Eklendi : ürün : "+ productName + " Adet :" +quantity)
}

addToCart("Elma",10);
let sayHello =()=>{
    console.log("Hello World!");
}
sayHello();

function addTocart2(productName,  unitPrice , quantity ){

}
addTocart2("Defter",5,18);
addTocart2("Kalem",9,26);
addTocart2("Silgi",50,3);
 
let product1 = {productName:"Defter",unitPrice:5 , quantity:18}
function addToCart3(product){
    console.log("Ürün Adı : "+product.productName);
    console.log("Fiyat : "+product.unitPrice);
    console.log("Adet : "+product.quantity);


}
addToCart3(product1)

let product2= {productName:"Elma", unitPrice:10,quantity:5}
let product3= {productName:"Elma",unitPrice:10,quantity:5}
product2=product3;
product2.productName ="KARPUZ";
console.log(product3.productName);


let sayi1=10;
let sayi2=20;
sayi1=sayi2;
sayi2=100;
console.log(sayi1);






