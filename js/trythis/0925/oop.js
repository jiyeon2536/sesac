// 1번
// Emp type의 hong 객체에 fullName 기능을 Accessor Property를 사용하지 말고,
// proxy 생성자 함수를 이용하여 구현하시오.

class Emp {
	constructor() {
		this.firstName = ''
		this.lastName = ''

		const handler = {
			get(target, prop) {
				if (prop === 'fullName') {
					return `${target.firstName} ${target.lastName}`
				}
				return target[prop]
			},
			set(target, prop, value) {
				console.log('proxy.set >>', target, prop, value)
				if (prop == 'fullName') {
					const [f, l] = value.split(' ')
					if (l === undefined) {
						target.lastName = f.toUpperCase()
					} else {
						target.firstName = f
						target.lastName = l.toUpperCase()
					}
				} else {
					target[prop] = value
				}
				return target
			},
		}

		return new Proxy(this, handler)
	}
}

//const proxyObj = new Proxy(targetObject, handler)

// 프록시 객체를 만드는 것이 아니라, Emp의 constructor로 프록시가 들어가야 함.

const hong = new Emp()

hong.fullName = 'Kildong Hong' // split하여 firstName, lastName 셋
console.log(hong.fullName) // 'Kildong HONG' 출력하면 통과!
hong.fullName = 'Lee'
console.log(hong.firstName, hong.lastName) // 'Kildong LEE' 출력하면 통과!

// 2번
// 모든 Array가 다음 기능을 갖도록 구현하세요.
// 1) mapBy(), findBy(), filterBy(), rejectBy(), sortBy()
// 2) firstObject, lastObject
import assert from 'assert'

const hong = { id: 1, name: 'Hing' }
const kim = { id: 2, name: 'Kim' }
const lee = { id: 3, name: 'Lee' }
const users = [hong, lee, kim]

Array.prototype.mapBy = function (key) {
	return this.map((el) => el[key])
}
Array.prototype.findBy = function (key, value) {
	return this.find((el) => el[key] === value)
}
Array.prototype.filterBy = function (key, value, isInclude = true) {
	return this.filter((el) => {
		if (isInclude) {
			if (String(el[key]).includes(value)) return el
		} else {
			if (!String(el[key]).includes(value)) return el
		}
	})
}

Array.prototype.rejectBy = function (key, value, isInclude = true) {
	return this.filter((el) => {
		if (isInclude) {
			if (!String(el[key]).includes(value)) return el
		} else {
			if (String(el[key]).includes(value)) return el
		}
	})
} // 모르겠습니다

Array.prototype.sortBy = function (key) {
	const [k, order] = key.split(':')
	if (order === 'desc') return this.sort((a, b) => (a[k] < b[k] ? 1 : -1))
	return this.sort((a, b) => (a[k] < b[k] ? -1 : 1))
}

Object.defineProperties(Array.prototype, {
	firstObject: {
		get() {
			return this[0]
		},
		set(value) {
			this[0] = value
		},
	},
	lastObject: {
		get() {
			return this[this.length - 1]
		},
		set(value) {
			this[this.length - 1] = value
		},
	},
})

const arr = [1, 2, 3, 4, 5]

assert.deepStrictEqual([arr.firstObject, arr.lastObject], [1, 5])
assert.deepStrictEqual(users.mapBy('id'), [1, 3, 2]) // 유저중에 id만 주세요
assert.deepStrictEqual(users.mapBy('name'), ['Hing', 'Lee', 'Kim']) // 이름만 주삼
assert.deepStrictEqual(users.filterBy('id', 2), [kim]) // id가 이거인 거의 이름만 주삼
assert.deepStrictEqual(users.filterBy('name', 'i', true), [hong, kim]) // key, value일부, isInclude

// assert.deepStrictEqual(users.rejectBy('id', 2), [hong, lee]) // id가 2가 아닌거
// assert.deepStrictEqual(users.rejectBy('name', 'i', false), [hong, kim]) // ????
// assert.deepStrictEqual(users.rejectBy('name', 'i', true), [lee]) //
assert.deepStrictEqual(users.findBy('name', 'Kim'), kim) // 하나만 나옴,
assert.deepStrictEqual(users.sortBy('name:desc'), [lee, kim, hong])
assert.deepStrictEqual(users.sortBy('name'), [hong, kim, lee])
assert.deepStrictEqual(users.firstObject, hong), assert.deepStrictEqual(users.lastObject, lee)
users.firstObject = kim
assert.deepStrictEqual(users.firstObject, kim)
users.lastObject = hong
assert.deepStrictEqual(users.lastObject, hong)

// 3번
// class와 Array를 이용하여 Stack과 Queue를 구현하시오.

// ex1) Stack
const stack = new Stack() // or new Stack([1,2]); // ⇐⇒ (1,2)
stack.push(3) // 추가하기
console.log(stack.pop()) // 마지막에 추가된 하나 꺼내기
// ex2) Queue
const queue = new Queue()
queue.enqueue(3) // 추가하기
queue.enqueue(2) // 추가하기
console.log(queue.dequeue()) // 추가한지 가장 오래된 - 먼저 들어간 - 하나 꺼내기

// 이전 장표에서 작성한 Stack과 Queue에 공통 기능을 확장하시오.(Collection)
// 공통기능을 콜렉션에 넣고 스택과 큐에 해당 푸시팝/앤큐디큐만 넣어라
// 주의할점 어레이가 외부에서 조작됨녀 안됨
// 공통: clear(), print(), remove(), isEmtpy, peek, poll, length(size)
// peek: 가장 (Stack:나중, Queue:먼저) 들어간 요소 반환 (요소 삭제 없음!)
// poll: 가장 (Stack:나중, Queue:먼저) 들어간 요소 반환 & 삭제 ⇐⇒ Stack.pop, Queue.dequeue
// remove: 가장 (Stack:나중, Queue:먼저) 들어간 요소 삭제(skip)
console.log(stack.peek, queue.peek) // 마지막(다음에 나올) 원소
queue.print() // 출력해보기
// const arr = queue.toArray().map((a) => console.log(a))
if (!stack.isEmpty) stack.clear()
if (queue.length) queue.clear()
