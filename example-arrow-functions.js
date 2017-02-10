function add (a,b){
  return a + b
}

console.log(add(1,3))
console.log(add(9,0))

let add2 = (a,b) => a + b

console.log(add2(1,3))
console.log(add2(9,0))

let add3 = (a,b) => {
  return (a + b)
}

console.log(add3(1,3))
console.log(add3(9,0))
