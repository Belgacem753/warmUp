//1. Write a JavaScript function to check whether an `input` is an array or not
// ex isArray([1,2])=>true
//    isArray(5)=>false

<<<<<<< HEAD
function isAarray(collection){
    if (Array.isArray(collection)){
        return true;
    }
    return false;
}
=======
>>>>>>> b8a430e8ea2c4d0e1e78f81ef8a28a628ba965c6
//2-Write a JavaScript function to get the first n element of an array.
//ex  first([1,2,3],1)=>[1]
//    first([1,2,3,4]2)=>[1,2]

<<<<<<< HEAD
function firstElements(array, n){
    var acc= array.filter(function(element,i){
        while(i<n){
            return element;
        }
    });
    return acc;
}
=======
>>>>>>> b8a430e8ea2c4d0e1e78f81ef8a28a628ba965c6
//3- Write a JavaScript function to convert an object into a list of `[key, value]` pairs
//ex: convert({name:'ahmed',age:20})=>[['name','ahmed'],['age', 20]]

function convertObject(obj){
    var acc=[];
    var aux=[];
    for(var key in obj){
        acc.push(key, obj[key]);  
        aux.push(acc);
        acc=[];
          
    }
    return aux;
}
