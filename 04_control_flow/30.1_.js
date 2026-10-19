// Reduce Method
myArr = [1,2,3,4,5]

// const initVal = 0
// const sumWithInit = myArr.reduce( (accumulator, currVal) => accumulator + currVal,
//                                 initVal )
// console.log(sumWithInit);

const sum = myArr.reduce( function (acc, currVal) { return acc + currVal}, 0)
console.log(sum);
