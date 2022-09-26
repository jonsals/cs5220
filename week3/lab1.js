// Problem 1

const printerInkLevel = (inLevels) => {
    let min = Infinity;
    for (let key in inLevels) {
        if (inLevels[key] <= 0) return 0;
        min = Math.min(min, inLevels[key]);
    }
    return min;
};

// Problem 2 --------------------------------------------------------------------
const evenOddSums = (arr) => {
    let result = [];
    let evenSum,
        oddSum = 0;
    arr.forEach((num) => {
        if (num % 2 === 0) evenSum += num;
        else oddSum += num;
    });

    result.push(evenSum, oddSum);
    return result;
};

// Problem 3 --------------------------------------------------------------------

const arrayObjectSum = (arr2D) => {
    return arr2D.map((arr) => {
        let numArr = arr.filter((element) => typeof element === 'number');
        let sum = numArr.reduce((prev, curr) => prev + curr, 0);
        return { array: numArr, sum: sum };
    });
};

// Problem 4 --------------------------------------------------------------------

const reverseStartingAt = (arr, str) => {
    let reverseArr = [];
    let targetArr = arr.slice(arr.indexOf(str));
    for (let i = targetArr.length - 1; i >= 0; i--) {
        reverseArr.push(targetArr[i]);
    }
    let result = [...arr.slice(0, arr.indexOf(str)), ...reverseArr];
    return result;
};

// Problem 5 --------------------------------------------------------------------

const cleanCorruptedData = (str) => {
    let words = str.split('*');
    let [firstName, lastName, age = 0] = words.filter((el) => el !== '');
    return { first: firstName, last: lastName, age: parseInt(age) };
};

//OutPut--------------------------------------------------------------------------
console.log('1)');
console.log(printerInkLevel({ cyan: 100, magenta: 55, yellow: 50, black: 90 }));
console.log(printerInkLevel({ cyan: 0, magenta: 70, yellow: 90, black: 80 }));

console.log('2)');
console.log(evenOddSums([2, 1, 9, 4, 8, 7]));
console.log(evenOddSums([2, 1, 2, 1, 2, 1]));

console.log('3)');
console.log(
    arrayObjectSum([
        [1, 'x', 2, true, 3, 4, 0, 5],
        [0, 'y', 'z', 2],
        [1, 3, 5, false, 'hello'],
    ])
);
console.log('4)');
console.log(reverseStartingAt(['a', 'b', 'c', 'd', 'e'], 'c'));

console.log('5)');
console.log(cleanCorruptedData('Bruce**Wayne***48'));

//2
//   let evenArr = arr.filter((num) => num % 2 === 0);
//   let oddArr = arr.filter((num) => num % 2 !== 0);
//   let evenSum = evenArr.reduce((prev, current) => prev + current, 0);
//   let oddSum = oddArr.reduce((prev, current) => prev + current, 0);

// 3
// let result = [];
// for (let key of arr) {
//   let numArr = key.filter((element) => typeof element === "number");
//   let sum = numArr.reduce((prev, curr) => prev + curr, 0);
//   result.push({ array: numArr, sum: sum });
// }
// return result;
