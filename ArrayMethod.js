/*  Closure : is combination of a function by we can access inner function by  outer function
  
 */
function main(name){
    function say(){
        console.log(name);
    }

    return say;
}

let consolename = main("Shivanshu");
consolename();

/* Currying:
 */
//Example 1
function add(a){
    return function(b){
        return  function(c){
            return a+b+c;
        };
    };
}
console.log(add(1)(2)(3));
//Example 2 of sending email
function sendEmail(to){
    return function (subject){
        return function(body){
            console.log(`sending mail ${to} which consist ${subject} with body ${body}`);

        }
    }
}
let step1= sendEmail("Shivanshu@gmail.com");
let step2= step1("Order Successfull");
let step3 = step2("Hi,Your order is successfull");
console.log(step3);
 //method 2
 const adda = a => b => c => a+b+c;
 console.log(adda(2)(3)(4));

//IIFE: Immediately Invoked Function Expression
 /* used to execute the aysnc function */

 const data = (async () => { await fetch("https://dummyjson.com/products")})()
 console.log(data);

 
