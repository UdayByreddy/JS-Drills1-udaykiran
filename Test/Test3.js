

const {counterFactory,limitFunctionCallCount,cacheFunction} = require("../Solutions/Solutions3")

//Return an object that has two methods called `increment` and `decrement`.

let counter = counterFactory();


console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());

// The returned function should only allow `cb` to be invoked `n` times
// Returning null is acceptable if cb can't be returned

let callCount = limitFunctionCallCount(()=>{
    return "Hello World!";
},5);

let n=7;
while(n-->0){
    console.log(callCount());
}

// Should return a function that invokes `cb`.
// A cache (object) should be kept in closure scope.

let cache = cacheFunction((name,age)=>{
    return {
        Name:name,
        Age:age
    }
});
console.log(cache("uday",21));
console.log(cache("reddy",21));
console.log(cache("uday",21));
