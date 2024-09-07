//function that retrieve all the names of the object's properties.
function keys(obj){
    let keysArray = [];       // creating a array
    for(let key in obj){       // iterate through that object
        keysArray.push(key);
    }
    return keysArray;    // return the keys of object
}
//Return all of the values of the object's own properties.

function values(obj){
    let valuesArray = [];
    for(let key in obj){          // iterate through object
        valuesArray.push(obj[key]);
    }
    return valuesArray;  // return all the keys
}
// // Like map for arrays, but for objects. Transform the value of each property in turn by passing it to the callback function.
function mapObject(obj,callback){
    let resultObj = {};
    for(let key in obj){                // iterate the object
       resultObj[key] = callback(obj[key],key);     // now callback function excited on everry object
    }
    return resultObj;  // return the result object
}
// Convert an object into a list of [key, value] pairs.

function pairs(obj){
    let pairs = [];
    let keysOfObj = keys(obj);         // get the keys array by keys funtion
    let valuesOfObj = values(obj);     // get values array from values function
    pairs.push(keysOfObj);
    pairs.push(valuesOfObj);
    return pairs;            // return the array
}

// Returns a copy of the object where the keys have become the values and the values the keys.
function invert(obj){
    let copyObj = {};
    for(let key in obj){
        copyObj[obj[key]]=key;       // reverse the key object and object to keys
    }
    return copyObj;
}

// Fill in undefined properties that match properties on the `defaultProps` parameter object.
function defaults(obj,defaultProps){
    for(let key in obj){
        if(obj[key]===undefined || obj[key]===null){   // checking if value is undefiend 
            obj[key]=defaultProps[key];     // assign the defaultProp value to it
        }
    }
    return obj;   // return the object
}

module.exports ={keys,values,mapObject,pairs,invert,defaults};
