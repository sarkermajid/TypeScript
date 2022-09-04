"use strict";
console.log("Hello TypeScript");
// number
let x = 100; // number diye integer,float sob define kore
console.log(x);
// boolean
let y = false;
console.log(y);
// string
let fname = 'Sarker';
let lname = 'Majid';
console.log(`Hi! ${fname} ${lname}`);
// Array
let items = [1, 3, 4, 5];
console.log(items[1]);
let information = [
    {
        username: 'sarkermajid',
        email: 'sarkermajid@gmai.com',
        age: 26
    },
    {
        username: 'sohankhan',
        email: 'sohankhan@gmail.com',
        age: 25
    }
];
console.log(information[0]);
console.log(information[1].username);
// Tuple
let value;
value = ['abc', 5];
console.log(value[0]);
let value2;
value2 = [
    ['A', 10],
    ['B', 30],
    ['C', 50]
];
console.log(value2[1]);
