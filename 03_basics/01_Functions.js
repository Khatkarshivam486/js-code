// creating a function

function addTwoNumbers(num1, num2){
    let sum = (num1 + num2)
    return sum
}

const res = addTwoNumbers(3, "a") //  val = undefined becz console.log only print's value not return's it
// console.log("Result: ", res)

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Username not defined in Bio!")
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("Shivam"))

// *******************Shopping Cart Where we don't know the no of arguments but we have to give the Total of all***************************

// function calculateCartPrice(val1, val2, ...num1){ // ...rest operator is used
//     return num1
// }
// console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
    username: "Shivam",
    price: 199
}

// Object passing in function
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
// handleObject(user)
handleObject({
    username: "google",
    price: 1000
})