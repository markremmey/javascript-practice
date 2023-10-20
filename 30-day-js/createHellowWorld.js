const createHelloWorld = function() {
    return function(...args) {
        return "Hello World"
    }
}

newHello = createHelloWorld()

console.log(newHello("test"))