const heros=["shaktiman,doga"];

let obj={
    name:"kanu",
    age:20,
}

const myFunction=function(){
    console.log("hello me")
}
//stack(primitive),heap memory(non-peimitive) 

let number1=123;
let anothernumber=number1;
console.log(anothernumber)
anothernumber=234
console.log(anothernumber)
console.log(number1)

let user1={
    email:'user1@google.com',
    upi:"userpay",
}

let user2=user1;
user2.email="k1@google.com";
console.log(user1.email)
console.log(user2.email)

