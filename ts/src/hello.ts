const myName: string = 'gigi'
console.log(`Hello, ${myName}`)
const myAge: number = 27
console.log(`${myAge} years old`)

let x: number | string
x = 1
console.log(x)
x = 'abc'
console.log(x)

const len = x.length

let y: number | undefined
console.log(y)

// ---
console.log('--')

const getSum = (...rest: number[]) => {
	let sum = 0
	rest.forEach((el) => (sum += el))
	return console.log(sum)
}

getSum(1)
getSum(1, 2, 3)
getSum(1, 2, 3, 4, 5)
getSum() // OK -> []

export function time2() {
	throw new Error('')
}

export {}

export function time3() {
	return
}

export const timePromi = (n: number) =>
	new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log('time!!')
			if (n % 2 === 0) resolve(n + 1)
			reject(`oddnum: ${n}`)
		}, 1000)
	})
