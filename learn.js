function addnumber2(...numbers){ //Spread operator
    let ans =0;
    for(let i=0;i< numbers.length;i++){
        ans= ans+numbers[i];
    }
    return ans;

}
let result2=addnumber2(12,23,34,-9);
console.log(result2);
//Arrow Function
/* Hoisting: we can't use hoisting in arrow function but we can use it in normal function that are created using keyword function */
/* arguments : we can't use arguments keyword in arrow instead we have to use ..numbers (spread operator) */
/* arrow function using this keyword pointing to the window so it not recomend to use in local scope   but normal function pointing to the it's outer function  */


//higher order function : function which take function as arguments or accepts as arguments 

//callback function: function that is passed as arguments inside another function
function multiply(a,b,callback){
    //higher order function
    let result = a*b;
    callback(result);

    return () => {console.log(result)}

}
multiply(2,4,function (val) {console.log(val)}) // call back function

//we can also return function from function
let functioncall =  multiply(9,9,()=>{})
functioncall();

 //Arrays : arrays in js is hetrogenous that can contain number , alphabet , emoji any data type all together
 /* .forEach() is callback function that is used to iterate over arrays and it is differ from .map() as for map will return array with applied operation */

 const arr =[1,2,3,45,56,7];
 arr.forEach((val)=> console.log(val))
 let numMap = arr.map((n) => n*2);
 console.log(numMap)
 // .find():
 let searchitem = arr.find(num => num===45);
 console.log(searchitem);
 // .findindex() : return -1 when value is not found
 // .filter() :

 let evenarr = arr.filter((num) => num%2 ==0);
 console.log(evenarr);
 // .slice() : ignore last element
 // .splice() : del the element in range from original array but also return the del element

 /* DOM: Document Object Model with this we can interact with browser with the help of js */

 const paragraph = document.querySelector(".para");
 console.log(paragraph.innerText);
 const body = document.querySelector("body");
 console.log(body.children)
 console.log(paragraph.parentElement)

 // document.getElementById()
 const id = document.getElementById("hii")
console.log(id.innerText);