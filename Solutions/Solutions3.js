// `increment` should increment a counter variable in closure scope and return it.
    // `decrement` should decrement the counter variable and return it.
function counterFactory(){
   let counter =0;             // intilze the counter
   return {
    increment:function(){   // increment function
        counter+=1;
        return counter;
    },
    decrement:function(){  // decrement function
        counter-=1;
        return counter;
    }
   }

}

/// Should return a function that invokes `cb`.
  // The returned function should only allow `cb` to be invoked `n` times.
function limitFunctionCallCount(cb,n){
    let count =0;                // intilze the count
    return function(){
        if(count<n){         // check closure count
            count+=1;
            return cb();   // return to callBack function
        }
        else{
            return "null";   // return null
        }
    }
}



  // The cache should keep track of all arguments have been used to invoke this function.
    // If the returned function is invoked with arguments that it has already seen
    // then it should return the cached result and not invoke `cb` again.
    // `cb` should only ever be invoked once for a given set of arguments.
function cacheFunction(cb){
    let cache={};                  // create cache at clousers
    return function(name,age){
        let key = `${name}_${age}`;  // create an key
        if(cache[key]){                 // check the key in cache and return if having in the cache
            return cache[key];      
        }
        else{
            let result = cb(name,age);    // return to call back function and create a new object
            cache[key] = result;
            return result;
        }
    }
}

function createObject(name,age){    // call back which create a new object
    return {
        Name:name,
        age:age
    }
}

module.exports = {counterFactory,limitFunctionCallCount,cacheFunction};
