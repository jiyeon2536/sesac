function greeting(msg) {
	return function who(name) {
		console.log(`${name}님, ${msg}!`)
	}
}

const hello = greeting('hello')
const howdy = greeting('how are you')
hello('카일')
hello('보라')
howdy('호진')

function counter(step = 1) {
	var count = 0
	return function increaseCount() {
		count = count + step
		console.log(count)
		return count
	}
}

const incBy1 = counter(1)
const incBy3 = counter(3)

incBy1()
incBy1()

incBy3()
incBy3()
incBy3()
