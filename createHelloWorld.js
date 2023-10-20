// Create Hello wORLD
// Fo rfunctions use const, otherwise use let

const createHelloWorld = function() {
	return function(...args) {
		return "Hello World";
	}
}

const a = createHelloWorld();
