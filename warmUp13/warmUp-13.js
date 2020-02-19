//create a function isSubset that should take two arrays and determine whether the second array is a subset of the first array. 
//For example:  array: [ 1, 2, 3, 4 ], sub:[ 2, 3, 4 ] => true
//              array: [ 2, 2, 2, 3, 4 ], sub:[ 2, 4, 3 ] => true
//              array: [ 2, 3, 3, "a" ],  sub:[ 3, 3, 3, "a" ] => false

function isSubset (array, sub) {
    var result = 0;
    var j = array.length-1;
    for (i = sub.length-1; i >=0; i--) {
        
        if(sub[i]===array[j]){
            result +=1;
            j--;
        } else {
            result +=0;
            j--; 
        }
    }
    if (result === sub.length) {
        return true;
    }
    return false;
}