
// function accepts three parameters: data, delay, and shouldFail
function simulateAsyncTask(data, delay, shouldFail) {
    // function returns a promise
    // promise accepts two parameters 
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldFail) {
                reject('An error occurred.');
            } else {
                resolve(data);
            }
        }, delay);
    });
}

console.log(simulateAsyncTask('hello',5,true))