// index page code

const {sum,sub,pro,div, sin, cosine, tangent} = require("./data.js")
sum(10,10)
sub(20,5)
pro(12,12)
div(10,5)
sin(30)
cosine(30)
tangent(30)

// Data page code

const sum=(a,b)=>{
    console.log(a+b);
    }
const sub=(a,b)=>{
    console.log(a-b);
    }
const pro=(a,b)=>{
    console.log(a*b);
    }
const div=(a,b)=>{
        console.log(a/b);
}
const sin=(a)=>{
    console.log(Math.sin(a))
}
const cosine=(a)=>{
    console.log(Math.cos(a))
}
const tangent=(a)=>{
    console.log(Math.tan(a))
}

module.exports={
   sum,
   sub,
   pro,
   div,
   sin,
   cosine,
   tangent
}
