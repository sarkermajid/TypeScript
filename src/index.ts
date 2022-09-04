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

// Enum

enum color {
    red = 1,
    green,
    black = 8,
    yellow
}

console.log(color.red);
console.log(color[1]);
console.log(color.green);
console.log(color.black);
console.log(color.yellow);

// Unknown

let notSure: unknown = 4;
console.log(typeof(notSure));

let loosely: any = 4;
let loosely1: any = "sarker majid";
console.log(loosely);
console.log(loosely1);

// Union

let a: string | number = 50;
console.log(a);

// If Else

if(0){ // 0 chara je kno man dile e yes return krbe bt 0 dile false dore ney. tai else er man print hobe.
    console.log('yes');
}else{
    console.log('no');
}

// for loop

for (let i=1; i<5; i++){
    console.log(i);
}

let items1:number[] = [11,33,66,99];
for (let i of items1){
    console.log(i);
} 

// while loop
let items2:number[] = [22,55,77];
let i=0;
while(items2[i]){
    console.log(items2[i]);
    i++;
}

// Object 
type User = {
    username: String,
    password: Number
}

const user: User = {
    username: 'sarkermajid789',
    password: 12342344
}

console.log(user.username);
console.log(user.password);