async function getData(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                name : "김민석",
                id : "winterlood",
            });
        }, 1500);
    });
}

// console.log(getData());

async function printData(){
    const data = await getData();
    console.log(data);
}

printData();