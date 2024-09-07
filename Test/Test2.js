
const {each,map,reduce,filter,find,flatten} = require("../Solutions/Solutions2");

const items = [1, 2, 3, 4, 5, 5]; 

//Iterates over a list of elements, yielding each in turn to the `cb` function.
console.log(each(items,function(ele){
    console.log(ele);
}))

// Iterates over a list of elements, yielding each in turn to the `cb` function But return the array.
console.log(map(items,function(ele){
    return ele%2!==0;
}));

//function reduce should be reduce the array assiagn to single variable

console.log(reduce(items,function(a,b){
    return a*b;
}))


//Similar to `find` but you will return an array of all elements that passed the truth test
  // Return an empty array if no elements pass the truth test

console.log(filter(items,function(ele){
    return ele<=4;
}));

//Look through each value in `elements` and pass each element to `cb`.
// If `cb` returns `true` then return that element.

console.log(find(items,function(ele){
    return ele===5;
}));

//Flattens a nested array (the nesting can be to any depth).

const nestedArray = [1, [2], [[3]], [[[4]]]];
console.log(flatten(nestedArray));