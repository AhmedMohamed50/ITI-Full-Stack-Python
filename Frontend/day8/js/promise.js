function fetchData(isRejected) {
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
            if(isRejected) {
                reject('Rejected');
            }
            else {
                let date = {name1: "ahmed", name2: "mohamed"};
                resolve(date);
            }
    },3000)
    })
}

fetchData(false)
.then(data => console.log(data))
.catch(err => console.error(err))

