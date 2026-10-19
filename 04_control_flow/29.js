// forIn,forEach, ForOf, High Order Fn - Array Specific loops
const arr = ["js", "cpp", "rb", "py", "java"]
// for (const num of arr) { // forOf works for **Maps**
// }

//Maps
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")

// for( const [key, val] of map){ // Array Destructure [key, value]
//     console.log(key);    
// }

// forIn works for **Objects**
const myObject = {
    js: "javascript",
    cpp: "c plus plus",
    rb: "ruby",
    swift: "swift by apple"
}
// for (const key in myObject) {
//     // console.log(`${key} shortcut is for ${myObject[key]}`);
//     // console.log(key, ":-",myObject[key]);   
// }

// for (const key in arr) {
//     console.log(arr[key]);
// }

// callback fn -> means what fn u give to code, these dont have fn name
// arr.forEach( function (item) { // this is callback function
//     console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }
// arr.forEach( printMe )

// arr.forEach( (item, index, arr) => { // Callback fun only **no fun name**
//     console.log(item, index, arr)  
// }) 

