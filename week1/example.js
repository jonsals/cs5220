// const s=1;
// s=3;
let a =1

console.log(a)
function iterate(arr){
    for(let i =0 ; i<arr.length;i++){
        const num = arr[i]; 
        num%2===0? console.log('even'):console.log('odd');


    }
}
// to run in debug mode
iterate([1,2,3,4,8]);