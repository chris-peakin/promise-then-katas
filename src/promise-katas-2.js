const { fetch } = require("./fakeApi");
/* 

DO NOT change the import or names of the functions in this file. 

However, you will have to amend the body of the functions themselves in order to make the tests pass. 

You can look at the fakeApi.js file to see the shape of the data that is returned from our fakeApi

We have imitated the fetch module for these katas. The fetch function takes two parameters, url and requestBody. 

For the first 3 exercises you will only need to provide the first parameter, url. For the last exercise you will
need to use the second parameter, requestBody.

An example of using the fetch function:

1 parameter
fetch("food").then(<insert your callback function>)

2 parameters
fetch("joke", "question").then(<insert your callback function>)

*/

// 1 Create a function that uses the fetch function to make a request to the "food" URL and returns
// the data - expected return value "Cheese" of type String

const food = () => {
    return fetch("food").then(res => res.data);
};

// 2 Create a function that uses the fetch function to make a request to the "cats" URL and returns
// a list of cats in alphabetical order - expected return value ["Bandit", "Berry", "Puss in boots", "Smokey"] of type Array

const cat = () => {
    return fetch("cats").then(res => res.data.cats.sort());
};

// 3 Create a function that uses the fetch function to make a request to the "dogs" URL and returns
// the naughtiest dog - expected return value {name: "Mutley", naughty: 10} of type Object

const dog = () => {
    return fetch("dogs").then(res => {
        let naughtydog = res.data.dogs[0];
        for (const dog of res.data.dogs){
            if (dog.naughty > naughtydog?.naughty){
                naughtydog = dog;
            }
        }
        console.log(naughtydog);
        return naughtydog;
    })
};

// 4 Create a function that uses the fetch function to make requests to the "jokes" URL and returns
// a joke object with the key of question and answer - expected return { 
//     question: "Why did the scarecrow win the Nobel Prize?",
//     answer: "Because he was out-standing in his field."
// } of type Object
// You will have to make more than one request to our fakeApi to get all the data you need. 
// Be aware of nesting your calls (try to avoid callback hell). Take a look at Promise.all on MDN
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
//

const joke = () => {
    const promise1 = fetch("jokes", "question").then(res => res.joke);
    const promise2 = new Promise((resolve, reject) => {
        setTimeout(resolve (fetch("jokes").then(res => res.answer)), 1000);
    })
    return Promise.all([promise1, promise2]).then((responses) => {
        console.log({question: responses[0], answer: responses[1]});
        return {question: responses[0], answer: responses[1]};
    })
};

module.exports = {
    food,
    cat,
    dog,
    joke
}