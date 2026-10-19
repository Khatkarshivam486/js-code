const coding = ["js","py","rb","swift","java"]

// let val = coding.forEach( (item) => {return item} ) // manually need to return values
// console.log(val);

// Filter doesn't need to return value's
const myNums = [1,2,3,4,5,6,7,8,9,10]
// let newNums = myNums.filter( (item) => item > 4 )
// console.log(newNums);

// let newNums = myNums.filter( (num) => { return num > 4 })
// console.log(newNums);

// Map Usage is better than ForEach
// let newNums = myNums.map( (num) => num+10 )
// console.log(newNums);

//Chaining  Method - using 2-3 methods together, res passed to nxt chain
let newNum = myNums
            .map((num) => num * 10)
            .map((num) => num + 1)
            .filter((num)=> num>40)

console.log(newNum);


