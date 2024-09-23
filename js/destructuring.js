const { id, name = 'Hong', addr = 'seoul' } = { id: 1, name: undefined, addr: null }

console.log(name)
console.log(addr)

const obj = { i: 1, j: 2, l: 3, m: 4, n: 5 }
let { j, i, k = i * j * n } = obj // error
