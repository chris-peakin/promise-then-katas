/* 

DO NOT change the names of the functions in this file. 

However, you will have to amend the body of the functions themselves in order to make the tests pass. 

Look at the Promise documentation on MDN
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

You can create a new promise by using the Promise constructor. We use the 'new' keyword,
followed by an uppercase 'Promise'. Invoke the Promise constructor like this 'Promise()' and pass in a callback function 
'Promise(() => {}). 
The callback function in the Promise constructor always has a resolve function as the first
parameter and a reject function as the second parameter, 'Promise((resolve, reject) => {}).
Sometimes we shorten this to 'res' for 'resolve' and 'rej' for 'reject'. The name
of these parameters can be whatever you want to call them, however they will always be a 
resolve and reject function as that is how Promises have been built for us. 

Example use:

const myPromiseWillResolveSuccessfully = true;

const myFirstPromise = new Promise((resolveFunction, rejectFunction) => {
    if (myPromiseWillResolveSuccessfully) resolveFunction("Yay, I got my data")
    else rejectFunction("My promise rejected :(")
})

Remember, a Promise can only resolve successfully, or reject when it fails to resolve.
*/

// 1 Create a function that returns a resolving promise
// Example:
// when we call returnPromise like 'returnPromise()' we expect our function to use the 
// 'resolve' Promise callback function in order to resolve successfully

const returnPromise = () => {
    return  new Promise((resolve, reject) => {
        resolve("The promise resolve to whatever lives in here");
    })
 };

// 2 Create a function that returns a promise which returns 10 if it resolves succesfully
// Example:
// returnTen() resolves to the value 10

const returnTen = () => {
    return new Promise((resolve, reject) => {
        resolve(10);
    })
 };

// 3 Create a function that returns a promise which returns 'string' if it resolves succesfully
// Example:
// returnString() resolves to the value 'string'

const returnString = () => {
    return new Promise((resolve, reject) => {
        resolve('string');
    })
 };

// 4 Create a function that returns a promise which returns an object with a key of name and value of 'Bob' if it resolves succesfully
// Example:
// returnBob() resolves to the value { name: 'Bob' }

const returnBob = () => {
    return new Promise((resolve, reject) => {
        resolve({ name: 'Bob'});
    })
 };

// 5 Create a function that returns a promise which returns an array with 4 strings of 'eggs', 'apples', 'milk' and 'bread' if it resolves succesfully
// Example:
// returnList() resolves to the value ['eggs', 'apples', 'milk', 'bread']

const returnList = () => {
    return new Promise((resolve, reject) => {
        resolve(['eggs', 'apples', 'milk', 'bread']);
    })
 };

// 6 Create a function that returns a promise which returns "An error occurred" if it rejects
// Example:
// anError() rejects to "An error occurred"

const anError = () => {
    return new Promise((resolve, reject) => {
        reject('An error occurred');
    })
}


// 7 Create a function that returns a promise which returns 666 if it rejects
// Example:
// theNumberOfTheBeast() rejects to the value 666

const theNumberOfTheBeast = () => { 
    return new Promise((resolve, reject) => {
        reject(666);
    })
};

// 8 Create a function that returns a promise which returns an object with a key of error and value of 500 if it rejects
// Example:
// internalServerError() rejects to { error: 500 }

const internalServerError = () => {
    return new Promise((resolve, reject) =>{
        reject({error: 500});
    })
 };

// 9 Create a function that returns a promise which resolves to "happy" if the parameter is greater than 
// or equal to 1 and rejects to "sad" if the value is less than 1
// Example:
// happySad(1) resolves to "happy"
// happySad(0) rejects to "sad"

const happySad = (number) => {
    return new Promise((resolve, reject) =>{
        if (number >= 1){
            resolve('happy')
        } else {
            reject('sad')
        }
    })
 };

// 10 Create a function that returns a promise which resolves to "Yes. Luke, I am your father." if the 
// parameter is "Luke" and rejects to "Not your dad." if the value is anything else
// Example:
// amIYourFather() resolves to "Yes. Luke, I am your father."
// amIYourFather() rejects to "Not your dad."

const amIYourFather = (jediName) => { 
    return new Promise((resolve, reject) =>{
        if (jediName === 'Luke'){
            resolve('Yes. Luke, I am your father.')
        } else {
            reject ('Not your dad.')
        }
    })
};

// 11 Create a function that returns a promise. The promise should resolve to a new function that returns "My name is <input name>" 
// Example:
// A call to myNameIs() resolves to a new function that takes one argument, name, and returns "My name is name" Eg (name) => `My name is ${name}`

const myNameIs = () => {
    return new Promise((resolve, reject) => {
        resolve((name) => {
            return `My name is ${name}`
        })
    })
 };


module.exports = {
    returnPromise,
    returnTen,
    returnString,
    returnBob,
    returnList,
    anError,
    theNumberOfTheBeast,
    internalServerError,
    happySad,
    amIYourFather,
    myNameIs
}