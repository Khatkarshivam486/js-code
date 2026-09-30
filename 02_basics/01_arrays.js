// array

const myArr = [1, 2, 3 , 4, 5]

// myArr.push(6)
// myArr.unshift(0)
// myArr.shift()
// console.log(myArr);

// const newArr = myArr.join()

// console.log(newArr);
// console.log(typeof newArr);

// console.log("A", myArr);

// const myn1 = myArr.slice(1,3)
// console.log(myn1);
// console.log("B", myArr);

// const myn2 = myArr.splice(1,3)
// console.log(myn2);

// console.log(myArr);

// combining two arrays using -> Spread
// const marvel_heros = ["Ironman", "thor", "spiderman"]
// const dc_heros = ["flash", "batman", "superman"]
// const all_new_heros = [...marvel_heros, ...dc_heros] // ... -> this is spread operator
// console.log(all_new_heros);

// const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);

console.log(Array.from("Shivam"))
console.log(Array.from({name: "Shivam"})); // interesting ***

const score1 = 100
const score2 = 200
const score3 = 300
console.log(Array.of(score1, score2, score3))

