function f() {
	console.log('f.name', f.name)
	console.log('f.name', f.constructor)
	console.log('f.length', f.length)
	console.log('arguments', arguments)
	console.log('target', new.target)
}

new f(1, 2, 3)

const af = () => {
	console.log('f.name', f.name)
	console.log('f.length', f.length)
	console.log('arguments', arguments)
	// console.log('target', new.target);
}

// new af(1, 2, 3)

const addTax1 = function (resolve) {
	return function (price) {
		return resolve(price * 1.1)
	}
}
//        ||
const addTax2 = (resolve) => {
	return (price) => {
		return resolve(price * 1.1)
	}
}
//        ||
const addTax3 = (resolve) => (price) => resolve(price * 1.1)

// -> 이 셋을 왔따갔다 할 수 있도록

class Cat {
	constructor(name) {
		this.name = name // 부모가 cat이 아니라, constructor 임.
	}

	bark() {
		console.log('meow', this.name)
	}
	bark2 = () => {
		console.log('meow', this.name)
	}
}

const navi = new Cat('Navi')
// this 는 소유자인 나비임.
navi.bark()
navi.bark2()

// 좀 정리를 직접 해보라..!!!!
