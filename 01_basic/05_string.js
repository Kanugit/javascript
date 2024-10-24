const name='kanu'
const repocount=20
console.log(name+repocount+"Value")
console.log(`my name is ${name} and repo count ${repocount}`);

const myname=new String('kanu')
console.log(myname);
console.log(myname[0]);
console.log(myname.__proto__);
console.log(myname.length);

console.log(myname.charAt(2));
console.log(myname.indexOf('u'));

const newname=name.slice(0,4)
console.log(newname);
let newname1=name.slice(0,-2)
console.log(newname1);

newname1='kanupriya'
const newname2=newname1.slice(-2,2);
console.log(newname1);

const newStringone="  kanu  "
console.log(newStringone);
console.log(newStringone.trim());

const url="https://kanu.com/kanu%20tiwari"
console.log(url.replace('%20','_'));
console.log(url.includes('kanu'));

const onename="my name is kanu"
console.log(onename.split(' '));
