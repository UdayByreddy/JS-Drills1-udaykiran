let testObject = { name:"Bruce Wayne", age: 36, location: "Gotham" }; 

const defaultProps = { name: "Bruce Wayne", age: 36, location: "Gotham" }; 

const {keys,values,mapObject,pairs,invert,defaults} = require("../Solutions/Solutions1");

// To get the all keys of the object
console.log(keys(testObject));

// To get all values in the object
console.log(values(testObject));

//Transform the value of each property in turn by passing it to the callback function.
console.log(mapObject(testObject,function(value,key){
    if(typeof value==='number'){
    return value*2;
    }
    else{
        return "operation only on numbers";
    }

}));

//list of [key, value] pairs.
console.log(pairs(testObject));

//Returns a copy of the object where the keys have become the values and the values the keys.
console.log(invert(testObject));

//Fill in undefined properties that match properties on the `defaultProps` parameter object.
testObject = { name:null, age: 36, location: "Gotham" };

console.log(defaults(testObject,defaultProps));