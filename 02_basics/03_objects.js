// objects declaration using singleton und constructor

const tinderUser = {}
// const tinderUser = new Object()
tinderUser.id = "123abc"
tinderUser.name = "Samuel Coel"
tinderUser.isLoggedIn = false
// console.log(tinderUser);


const regularUser = {
    id: "Shivam@google.com",
    fullname: {
        userfullname: {
            firstname: "Shivam",
            lastname: "Khatkar"
        }
    }
}

// console.log(regularUser.fullname?.userfullname.firstname); // Optional Chaining ? if exists

//objects Merging
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const newobj = {...obj1, ...obj2}
// const newObj = Object.assign({},obj1, obj2) // {} <- this is target all values going into this
// console.log(newObj);
// console.log(obj1 === newObj);

// when values comes from DB it's form * Objects inside Array*
const user = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    }
]

// this thing is used most in DB's
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));

// console.log(tinderUser.hasOwnProperty("nam"));               ***


// ******************Object de structure and Json API Intro**********************************
const course = {
    coursename: "Js full Course",
    price: "999",
    courseInstructor: "Shivam Khatkar"
}

// Destructuring of Objects

// method to access Object entries
// const {target key} = source
// const {courseInstructor: Instructor} = course
// console.log(Instructor);

// React function Method using above de-structuring concept      *** function ke method
// const navbar = ({company}) => {

// }
// navbar(company = "hitesh")

// *********************API's Concepts****************************

