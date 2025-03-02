const myLoder = ()=> {
    return new Promise((resolve, reject) =>{
        const success  = Math.random();
        if(success < 0.5) {
            resolve(success);
        }
        else {
            reject(success);
        }
    })
}

myLoder()
.then(data => console.log('resolve data', data ))
.catch(err => console.log('rejected data', err))


fetch('')
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.log(err))

async function loarData(params) {
    const res = await fetch('');
    const data = await res.json();
    console.log(data);
}
loarData();


// we cam solw with arrow function.

const taskLoader = async ()=> {
    const res = await fetch('');
    const data = await res.json();
    console.log(data);
}