new Promise(function(resolve,reject){
    resolve();
})

//Promise {<fulfilled>: undefined}

new Promise(function (resolve,reject) {
    reject();
})
//Promise {<rejected>: undefined}

new Promise(function (resolve,reject) {
    
})
//Promise {<pending>}