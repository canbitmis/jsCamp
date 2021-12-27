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

function addtoCart4(x) {
    console.log(products)
}
 
let products = [
    {productName:"Gitar", unitPrice:900,quantity:3},
    {productName:"Pena", unitPrice:5,quantity:200},
    {productName:"Kapo", unitPrice:55,quantity:4}
]
addtoCart4(products)



/*function add(...numbers) { //rest
    for (let i = 0; i < numbers.length; i++) {
        console.log(numbers[i])
        
    }  
} */

function add(...numbers){
   let total= 0;
   for (let i =0 ; i < numbers.length ; i++){
       total= total+numbers[i]
   }
       console.log("toplam = "+total)
}

add(20,30)
//add(20,30,40)
//add(20,30,40,50)

console.log("En Büyük :" + Math.max(30,56,98,77,31,65,49,856,32,65)) 

let numbers =[30,10,500,600,120]
console.log(numbers)
console.log(...numbers)
console.log(Math.max(...numbers))


/*let musics = ["Rock","Jazz", "Classic"];
console.log(musics[2]) */

let [rock,jazz] = [
    "Rock",
    "Jazz",
    "Classic"
]
console.log(rock)
console.log(jazz)


let [icAnadolu,marmara] = [
    {name : "İç Anadolu" , population : "30M"},
    {name : "Marmara" , population : "20M"},
    {name : "Karadeniz" , population :"10M"}
]
console.log(icAnadolu)
console.log(marmara)


let newProductName , newUnitPrice , newQuantity
{productName:newProductName , unitPrice:newUnitPrice , quantity:newQuantity
=productName:"Elma" , unitPrice:10 , quantity;15}
console.log(newProductName)


