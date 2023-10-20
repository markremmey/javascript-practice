function sumcharCodes(n) {
  let sum = 0
  for (let i=0; i<n.length; i++) {
	  console.log(i)
    console.log(n.charCodeAt(i))
    sum += n.charCodeAt(i)
    // console.(sum)
  }
  return sum;
}

console.log(sumcharCodes("Hello World"))
