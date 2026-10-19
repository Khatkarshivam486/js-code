// // this and Arrow Function Use
// const user = {  // This works in Object only
//     username: "Shivam",
//     price: 999,

//     welcomeMessage: function(){
//         console.log(`${this.username} welcome to website`);
//         console.log(this)
//     }
// }

// user.welcomeMessage()

// function chai(){
//     // let username: "Shivam" 
//     console.log(this.username) // This not works in Function -> only in Object 
// }
// chai()


// Normal function (this call return node env Events) and in (Arrow fn this returns {} empty object)

// (Arrow Function)
// const chai = () => {
//     let username = "Shivam"
//     console.log(this) 
// }

// const user = {
//     name: "Shivam",
//     regular() {
//         console.log(this.name)
//     },
//     varFun: function(){
//         console.log(this.name)
//     },
//     arrow: () => {
//         console.log(this.name);   
//     }
// }

// const addTwo = (num1, num2) => {
//     return num1+num2
// }
// console.log(addTwo(1,4));

// Arrow fn (Implicit return)
// const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => (num1 + num2) // () -> in this **no need to write return** (used most in React)

// If to return an **Object**
// const addTwo = (num1, num2) => ({username: "Shivam"})
// console.log(addTwo(1, 5))

// Array using Classic/ Arrow Function
const myArray = [1,2,3,4,5]
// myArray.forEach(function(){}) // classic fn
// myArray.forEach(()=>()) //Arrow fn

