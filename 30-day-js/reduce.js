let sum = 0

function fn(acc, curr, idx) {
    console.log("idx: ", idx)
    console.log("acc: ", acc)
    return 2**curr+acc
}


function reduceFunc(arr) {
    return arr.reduce(fn)
}

console.log(reduceFunc([1,3,4,1,5]))