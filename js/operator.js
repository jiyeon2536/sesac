let a = 1,
	b = 2 // let a = 1; let b = 2;
let c = (a++, b++) // 쉼표 연산자와 할당 연산자 ⇒ 증감연산자
let d = (a--, b + a) // a++; let d = b + a;
console.log(a, b, c, d) // ?

const arr = [undefined, null, false, 0, NaN, '']

for (let i = 0; i < arr.length; i++) {
	// 얘는 메모리에 arr를 다 올려놓고 씀
}
for (const a of arr) {
	// 필요할 때 하나씩 꺼내씀
	console.log(a, !!a)
}

Math.round(4.5)

const obj = { id: 1, name: 'Hong' }
const sym = Symbol()
obj[sym] = 123
console.log(obj)
console.log(Object.keys(obj))
console.log(obj.hasOwnProperty('id'))
console.log(Reflect.ownKeys(obj))

class Dog {}
const maxx = new Dog('Maxx')
console.log(maxx instanceof Dog)

function ff(a, b, ...c) {
	/// 결합연산자 (rest)
	console.log(a, b, c, ...c) /// spread 연산자
}

ff(1, 2, 3, 4, 5)

const x = 1
function cond1() {
	if (x === 1) return 'one'
	if (x === 2) return 'two'
}

function cond2(x) {
	switch (x) {
		case 1:
			return 'one'
		case 2:
			return 'two'
		default:
			return 'etc'
	}
}

function cond3(x) {
	let res
	switch (x) {
		case 1: {
			const y = x + 1 //	블럭레벨로 잡아줘야함
		}
		case 2:
			res = 'two'
			break
		default:
			res = 'etc'
	}
	return res
}

console.log(cond3(1))
cond2(1)

// while (true) 랑 for (;;) 는 같은 표현

for (let i = 0; i < 5; i++) {
	setTimeout(() => console.log(i), 1000)
}
// 01234 블럭 레벨 스코프

for (var i = 0; i < 5; i++) {
	setTimeout(() => console.log(i), 1000)
}
// 55555 함수레벨스코프
