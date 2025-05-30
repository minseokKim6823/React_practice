function add10(num){
    const promise = new Promise((resolve, reject) =>
    {
        setTimeout(()=>{
            if(typeof num==="number"){
                resolve(num +10);
            }else{
                reject("숫자가 아님");
            }
        },2000);
    });

    return promise;
}
add10(0)
    .then((result)=>{
        console.log(result);
        return add10(result)
    })
    .then((result)=>{
        console.log(result);
        return add10(result)
    })
    .then((result)=>{
        console.log(result);
        return add10(result)
    }).catch((error)=> {
        console.log(error)
    });


// setTimeout(()=>{
//     console.log(promise);
// },3000);

// promise
//     .then((value)=>{
//     console.log(value);
//     })
//     .catch((error) => {
//         console.log(error);
//     })
