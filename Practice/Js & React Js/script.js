// Props and states in react js.

// (1) Spread Operator & (2) Rest Parameter.



// * ---------------------------------------Spread Operator -------------------------------------------------------

// (1)
// function addition(x, y, z, p) {
//     return x + y + z + p;
// }

// * Normal :-

// let res = addition(25, 25, 25, 25);
// let res = addition([25, 25, 25, 25]);                   // Undifined & error.
// console.log(res);


// * Spread operator :-

// const value = [25, 25, 25, 26];
// // const value = ([25, 25, 25, 27]);
// let res = addition (...value);                              // spread operator = ...value
// console.log(res);




// (2)
// function addition(x, y, z) {
//     return x + y + z;
// }
// // let res = addition(25, 25, 25,);
// let res = addition(25, 25, 25, 25, 25, 25);                        // Ans => 75.
// console.log(res);






// * ----------------------------------------- Rest Parameter -------------------------------------------------------

// (1)
// let total = 0;
// function addition (...args){
//     for (const x of args){
//         total = total + x;
//     }
//     return total;
// }
// let res = addition (25,50,50,50);
// console.log(res);







// * ------------------------------------------ Convert Array to Objects --------------------------------------------------

// (1)
// const fruits = ["Apple", "Mango", "orange"];
// const obj = Object.assign({}, fruits);                           // {}-> convert array to object.
// console.log(obj);



// (2)
// const fruits = ["Apple", "Mango", "Orange"];
// const obj = {};

// fruits.forEach((value, index) => {
//     obj [`key ${index}`] = value;
// })
// console.log(obj);



// (3)
// const map = new Map ([
//     ['name', 'king kohli'],
//     ['age', 34],
//     ['country', 'india']
// ]);
// console.log(map);



// (4) How to add, delete & size in array method :-

const map = new Map([
    ['name', 'king'],
    ['age', 34],
    ['jersey no.', 18]
])
// console.log(map);
console.log(map.delete('name'));                        // Delete Name.  or
map.delete('name')                                      // Delete name.
console.log(map);

// console.log(map.size);                                    // Size.

console.log(map.set('name', 'king kohli'));                        // Set name.  or
// map.set('name', 'Abd');                                      // set age.
// console.log(map);




