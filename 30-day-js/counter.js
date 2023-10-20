
// The function accepts a parameter, num. Then it returns a function which has
// access to the "hidden state" (i.e. num). Then the next time counter() is invoked

// num is hidden state, because it is not directly accessible from outside the function
// scope in which it is defined. Th
// 
var createCounter = function(num) {
    
    return function() {
        return num++
    }
}

const counter = createCounter(10)

console.log(counter())
console.log(counter())
console.log(counter())
