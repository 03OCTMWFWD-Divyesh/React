// // JavaScript Assessment Test 5 :-

// function Test() {
//     const arr = [1, 2, 2, 3];                               // output :- [1:1, 2:2, 3:1]

// }


// function Test1() {
//     const arr = [9, 9, 9, 99]                                // output :- [9:3, 99:1]
// }


// function Test2() {
//     const arr = [4, 3, 2, 1]                                 // output :- [1:1, 2:1, 3:1, 4:1]
// }




// (1)
// const myName = 'jim';
// if(myName){
//     myName = 'joe';
//     let myName = jeff
// }




// (2)
// var myName = 'jim';
// if(myName){
//     myName = 'joe';
//     var myName = 'jeff';
// }
// console.log(myName);





// (3)
// const myMoney = {
//     a : 4,
//     b : 10,
//     c : 20,
//     d : 100
// }

// for (const coin of myMoney){
//     console.log(`${coin} : ${myMoney} [coin]`);
// }





// (4)
// const person1 = {
//     name : 'willie',
//     address : {
//         city : 'Austin',
//         state : 'Texas'
//     }
// };
//  const person2 = {...person1};

//  person2.name = 'waylon';
//  person2.address.city = 'fort worth';

//  console.log(person1.address.city);






// (5)
// function truthy (x){
//     if (5 === x){
//         return true;
//     }else {
//         return false;
//     }
// }
// console.log(truthy(6));






// (6)
const obj1 = {a:1, b:2};
const obj2 = {b:1, c:2};
const obj3 = {c:1, d:2};

Object.assign(obj1, obj2,obj3);
console.log(obj1);