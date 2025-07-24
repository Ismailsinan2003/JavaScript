let tinderUser={}

tinderUser.id=34

tinderUser.mail="sinan@google.com"
tinderUser.name={
    fullname:{
        firstname:"ismail",
        lastname:"sinan"
    }
}
// console.log(tinderUser)

// console.log(tinderUser.name.fullname.lastname)

const o1={0:"b",1:"c"}
const o2={0:"a",1:"c"}

// const o3=Object.assign({},o1, o2)

const o3={...o1,...o2}
// console.log(o3)

// console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

let course={
    course_name:"javaScript",
    course_price:"1299",
    course_instructor:"Santosh"
}

// console.log(course.course_instructor)

// const {course_instructor:instructor} =course
// console.log(instructor)