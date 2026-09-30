// singleton
// object.create - constructor Method/Singleton

// object literals

const mySym = Symbol("key1")

const JsUser ={
    name: "Shivam",
    "full name": "Shivam Khatkar",
    [mySym]: "myKey1",
    age: 20,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])
// console.log(JsUser[mySym])

// JsUser["email"] = "shivam@chatgpt.com"
// Object.freeze(JsUser)
// JsUser["email"] = "shivam@huluhoi.com"
// console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello Js User")
}
JsUser.greeting2 = function(){
    console.log(`Hello Js User, ${this.name}`);
    
}
console.log(JsUser.greeting())
console.log(JsUser.greeting2())
