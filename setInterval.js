console.log(1);
console.log(2);
// setTimeout(()=>{
//     console.log(3);
// })
setTimeout(() => {
    console.log(3);
}, 2000);
console.log(4);
console.log(5);
console.log(6);
console.log(7);


let num = 0;
const clockId = setInterval(()=> {
    num++;
    // we will brack this infinite work by using clearInterval(clockid)

    if(num > 9) {
        clearInterval(clockId);
    }
    console.log('hello', num);
    console.log(clockId, num);
}, 1000)
// for stop this we use clearInterval(clockid);