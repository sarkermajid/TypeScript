console.log("Hello TypeScript");

// number
let x:number = 100;  // number diye integer,float sob define kore
console.log(x);

// boolean
let y: boolean = false;
console.log(y);

// string
let fname:string = 'Sarker';
let lname:string = 'Majid';
console.log(`Hi! ${fname} ${lname}`);

// Array

let items: number[] = [1,3,4,5];
console.log(items[1]);

let information: any[] = [
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
]
console.log(information[0]);
console.log(information[1].username);

// Tuple

let value: [string, number];
value = ['abc', 5];
console.log(value[0])


let value2: [string,number][];
value2 = [
    ['A',10],
    ['B',30],
    ['C',50]
]
console.log(value2[1]);