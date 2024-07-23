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
function add(a){
    return function(b){
        return  function(c){
            return a+b+c;
        };
    };
}
console.log(add(1)(2)(3));



