<<<<<<< HEAD
 // 1-implement the function mult that takes a single parameter n, and computes the multiplication of all integers up to n 
 //starting from 0, e.g.:
 mult(3); // => 6
 mult(4); // => 24


 function mult(n) {
 // your code is here
    var acc = 1;
    for (var i = 1; i <= n; i++)
    {
        acc *= i;
    }
    return acc;
}
=======
// 1-implement the function mult that takes a single parameter n, and computes the multiplication of all integers up to n
//starting from 0, e.g.:
mult(3); // => 6
mult(4); // => 24
>>>>>>> b8a430e8ea2c4d0e1e78f81ef8a28a628ba965c6

// 2- Use a while loop to build a single string with the numbers 1 through n
// separated by the number next to the current number.
//Have it return the new string.
// eg= 1 2 2 3 3 4 4 5 5 6 6 ...
<<<<<<< HEAD



function buildSring (n) {
    var str = '1';
    var i = 1;
    while (i++ < n){
        str += i + '' + i;
    }
    return str;
}
=======
>>>>>>> b8a430e8ea2c4d0e1e78f81ef8a28a628ba965c6
