


// Iterates over a list of elements, yielding each in turn to the `cb` function.
function each(array,callback){
   
    for(let i=0;i<array.length;i++){
        callback(array[i]);
    }
}

// Iterates over a list of elements, yielding each in turn to the `cb` function.

function map(array,callback){
    let result = [];
    for(let i=0;i<array.length;i++){
        result.push(callback(array[i],i,array));
    }
    return result;
}

//function reduce

function reduce(array,callback,startingValue){
    let accumlator =0;
    let startIndex =0;
    if(startingValue===undefined){
        accumlator=array[0];
        startIndex=1;
    }
    for(let i=startIndex;i<array.length;i++){
        accumlator=callback(accumlator,array[i]);
    }
    return accumlator;
}

//Look through each value in `elements` and pass each element to `cb`.
// If `cb` returns `true` then return that element.

function find(array,callback){
    for(let i=0;i<array.length;i++){
        if(callback(array[i])){
            return array[i];
        }
    }
    return "Not in the array";
}

//Similar to `find` but you will return an array of all elements that passed the truth test
  // Return an empty array if no elements pass the truth test

function filter(array,callback){
    let result = [];
    for(let i=0;i<array.length;i++){
        if(callback(array[i],i,array)){
            result.push(array[i]);
        }
    }
    return result;
}
//  Flattens a nested array (the nesting can be to any depth).

function flatten(array){
    let result = [];
    for(let i=0;i<array.length;i++){
        if(Array.isArray(array[i])){
            result = result.concat(flatten(array[i]));
        }
        else{
            result.push(array[i]);
        }
    }
    return result;
}

module.exports = {each,map,reduce,find,filter,flatten};