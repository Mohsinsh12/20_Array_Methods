"use strict";
//Mohsin  Shafique
// Array methods
let arr = ['Mohsin', 'Masab', 'Mehran', 'Zaki', 'Hasnain', 'Tanzeel'];
// Push: Changes the original array
arr.push('Azkia');
console.log(arr);
//POP: CHanges original array, pops out last item of array
arr.pop();
console.log(arr);
//shift:pops first value of array, i.e shifts o index to index 1
arr.shift();
console.log(arr);
//unshift..... puts value on index 0
arr.unshift('Tansi');
console.log(arr);
// concat: doesnot change original array
let arr1 = ['javed', 'Zeeshan', 'Imran'];
let arr2 = arr.concat(arr1);
console.log(arr);
console.log(arr1);
console.log(arr2);
//Join: doesnot change the original array,
//joins array items with the symbol given in code
let arr3 = arr.join('-');
console.log(arr3);
//slice: deletes array items upto specific index
// doesnot change original Array
let arr4 = arr.slice(3);
console.log(arr4);
//indexof: gives the index of specific item
console.log(arr.indexOf('Zaki'));
//includes: checks wether an item is present in an array or not
console.log(arr.includes("Bilal"));
//find: A bit complex
//takes in a function to find the value
// gives the first item that meats the criteria
let arr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29];
console.log(arr5.find((n) => n % 2 === 0));
let arr6 = arr.find(findname);
function findname(item) {
    return item === 'Tansi';
}
let arr67 = arr.find((n) => n === 'Masab');
// let arr67=arr.find((n:string)=>{return n==='Masab'}) // can be written in this way
console.log(arr6);
console.log(arr);
console.log(arr67);
// find index, just like find method but it returns the index of the item to be found
console.log(arr.findIndex((n) => n = 'Zaki'));
console.log(arr);
let arr9 = arr5.findIndex((n) => n % 2 === 0);
console.log(arr9);
//map
let arr10 = arr.map((n) => n + "s");
console.log(arr10);
let b = [2, 4, 6, 7, 9, 8, 5, 10];
let c = b.map((num) => num * 3);
console.log(c);
//reduce: takes 2 function params
let arr11 = arr.reduce((a, b) => a + b);
console.log(arr11);
let d = c.reduce((a, b) => a + b);
console.log(d);
//filter
let arr12 = arr.filter((item) => item.length > 5);
console.log(arr12);
let e = b.filter((n) => n % 2 == 0);
console.log(e);
//every: returns true/false, checks for all items to meet the condition
let f = c.every((n) => n > 0);
console.log(f);
// some: checks for some of the items to meet the condition
let g = c.some((n) => n > 8);
console.log(g);
//reverse
let arr13 = arr.reverse();
console.log(arr13);
// sort: changes the original array
let arr15 = arr.sort();
console.log(arr15);
//fill: changes the original array
arr.fill("Mohsin", 0, 4);
console.log(arr);
// at: not working
//let arr14=c.at(2)
