// Concepts illustrated:
// The init variable will never be "Out of scope" to any functions that are defined
// within the higher funciton createCounter


// This is a function that returns an anonymous object consisting of three functions.
// Each of the subsequent functions can be called by invoking the object.method()
// State is stored between each method inovcation

// Prompt: Create a function that accepts a value init and then returns three functions which
// either increment, decrement, or reset this value. This is called "hidden state"


class Counter {
    constructor(init) {
        this.init = init
        this.count = count
    }

    increment() {
        this.count=this.init
        return ++this.count
    }

    decrement() {
        return --this.count
    }

    reset() {
        return this.count
    }

}


function createCounter(init) {
    count = init
    
    const increment = () => ++count;

    const decrement = () => --count;

    const reset = () => count;

    return {
        increment,
        decrement,
        reset
    }
}

// function createCounter(init) {
//     let curr = init
    
//     const increment = () => ++curr

//     function decrement() {
//         return --curr
//     }

//     function reset() {
//         count = init
//         return count
//     }

//     return {
//         increment,
//         decrement,
//         reset
//     }
// }

// let counter = createCounter(4)

// console.log(counter.reset())
// console.log(counter.increment())
// console.log(counter.increment())


// class Counter {
//     constructor(init) {
//         this.init = init
//         this.count = init 
//     }

//     increment() {
//         return ++this.count;
//     }

//     decrement() {
//         return --this.count
//     }

//     reset() {
//         count = this.init
//         return count
//     }
// }

// counter_1 = Counter(0)


// counter_1.decrement()

const increment = () => ++count