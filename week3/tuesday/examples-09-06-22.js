/* Problem 1
- write a function called vowelPosition
- The vowelPosition function accepts one argument which is a string.
- The vowelPosition function return an array of objects where each object in the array only has one key value pair.
- The key is the letter and the value which is index position of each vowel in the string.
*/
const sentence = 'ES6 JavaScript and Node.js';
// example output: [ { E: 0 },  { a: 5 }, { a: 7 },  { i: 11 }, { a: 15 }, { o: 20 }, { e: 22 }]
const vocalPosition = (str) => {
    const position = [];
    const vowel = ['a', 'e', 'i', 'o', 'u'];

    for (let i = 0; i < str.length; i++) {
        const character = str[i];
        if (vowel.includes(character.toLowerCase())) {
            const vowelObj = { [character]: i };
            position.push(vowelObj);
        }
    }
    return position;
};

let ans = vocalPosition(sentence);
// console.log(ans);
/* Problem 2
- write a function called convertToTypes
- the convertToTypes function accepts one argument which is a mixed array
- the convertToTypes function  returns a new array that contains the type of each element in the array that is passed in
*/

const arr = [1, true, 3.14, '200', 'hello', []];
// example output: [ 'number', 'boolean', 'number', 'string', 'string', 'object' ]
const convertToTypes = (inputArray) => {
    const output = [];

    inputArray.forEach((element) => {
        const type = typeof element;
        output.push(type);
    });
    console.log(output);
    return output;
};

// convertToTypes(arr);

/* Problem 3
- write a function called calculateShipping
- the calculateShipping accepts one argument which is an object
- this objects represet a shopping cart with item names as the key and prices as the value
- the calculateShipping is able to calculate the price of all items in the cart
- if the cart total is over $99 then shipping is free (0) else shipping is 10% of the cart total
- the calculateShipping function returns the updated cart object with a shipping key and shipping cost as the value
*/

const cart1 = { keyboard: 50, mouse: 25, thumbdrive: 10 };
// example output: { keyboard: 50, mouse: 25, thumbdrive: 10, shipping: 8.5 };

const cart2 = { monitor: 200, cable: 5 };
// example output: { monitor: 200, cable: 5, shipping: 0 };

/* Problem 4
- write a function called toArrayOfObjects
- the toArrayOfObjects function accepts one argument which is a 2D array
- this array always contains nested arrays with only 2 entries in each nested array
- the toArrayOfObjects is able to convert the nested arrays to objects
- the toArrayOfObjects functions returns an array of objects
- each object contains the key which is the first item in the nested array
  and the value which is the second item in the nested array
*/

const phoneArray = [
    ['Apple', 'iPhone 14'],
    ['Samsung', 'Galaxy S22 Ultra'],
    ['Google', 'Pixel 6'],
    ['OnePlus', '10 Pro'],
];
// example output: [ { Apple: 'iPhone 14' }, { Samsung: 'Galaxy S22 Ultra' }, { Google: 'Pixel 6' }, { OnePlus: '10 Pro' } ]
let toArrayOfObject = (nested) => {
    let objArr = nested.map((pairs) => {
        const key = pairs[0];
        const value = pairs[0];
        return { [key]: value };
    });

    let destructuring = nested.map(([key5, value]) => {
        return { [key]: value };
    });
};
