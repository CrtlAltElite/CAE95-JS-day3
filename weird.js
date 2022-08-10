let cart=[{id:1},{id:3},{id:5},{id:1}]

let item = {id:1}

console.log(item in cart)
console.log({id:1}=={id:1})

console.log(item.id == {id:1}.id)

let myCart1 = [1,2,3,4]
let myCart2 = [1,2,3,4]
let myCart3 = myCart1
console.log(myCart1==myCart2)
console.log(myCart1==myCart3)
myCart3.push(5)
console.log(myCart3)
console.log(myCart1)

let myCart4 = myCart1.slice()
console.log(myCart4)
console.log(myCart4==myCart1)