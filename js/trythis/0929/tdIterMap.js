// 연습문제 1
// 두 개의 수를 입력 받아 더하기를 수행하는 제너레이터를 작성하시오.

function* add() {
	const first = yield '첫 번째 수?'
	console.log(first)
	const second = yield '두 번째 수?'
	console.log(second)
	return `Total: ${first + second}`
}

const itAdd = add()

console.log(itAdd.next().value)
console.log(itAdd.next(1).value)
console.log(itAdd.next(2).value)

// (실행 결과: 1과 2를 넣었을 때)
// 첫 번째 수?  → 1   next(1)
// 두 번째 수?  → 2
// Total: 3

import { LINE2 } from '../../localdata'
// 연습문제 3
// 다음의 지하철 노선 중에서, 출발역 ~ 도착역까지만을 반환하는 클래스를 작성하시오. (단방향만!)

class Subway {
	constructor(start, end) {
		this.start = start
		this.end = end
	}

	[Symbol.iterator]() {
		// 시작, 현재
		let idx = LINE2.findIndex((el) => el === this.start)
		let endIdx = LINE2.findIndex((el) => el === this.end)
		if (endIdx < idx) {
			// 한바퀴 돌아야 함.
			endIdx += LINE2.length
		}
		return {
			next() {
				return {
					value: LINE2[idx++ % LINE2.length],
					done: idx > endIdx + 1,
				}
			},
		}
	}
}

const routes = new Subway('문래', '신림')
const it1 = routes[Symbol.iterator]()
console.log([...routes]) // [ '문래', '대림', '구로디지털단지', '신대방', '신림' ]
console.log(it1.next()) // { value: '문래', done: false }
// ...
console.log(it1.next()) // { value: '신림', done: false }
console.log(it1.next()) // { value: undefined, done: true }
console.log(it1.next()) // { value: undefined, done: true }

const routes2 = new Subway('구로디지털단지', '성수') // 32개 정거장
console.log([...routes2]) // ['구로디지털단지', '신대방', ..., '성수']
const it2 = routes2[Symbol.iterator]()
while (true) {
	const x = it2.next()
	console.log(x)
	if (x.done) break
}
const route3 = new Subway('문래', '합정') // 46개 정거장이면 통과!
console.log('🚀 ~ route3:', [...route3].length)
const route4 = new Subway('신도림', '을지로입구') // 48개 정거장이면 통과!
console.log('🚀 ~ route4:', [...route4].length)

// 연습문제 5
// 다음과 같이 부서와 직원 객체가 있을 때,
// deptMap과 empDept를 만들고, 개발팀 직원 이름 목록을 출력하시오. (key: id)
import assert from 'assert'

const hrTeam = { id: 1, dname: '인사팀' }
const devTeam = { id: 2, dname: '개발팀' }
const depts = [hrTeam, devTeam]

const deptMap = new Map()
for (const d of depts) {
	deptMap.set(d.id, d)
}
console.log(deptMap) // Map(2) { 1 => { id: 1, dname: '인사팀' }, 2 => { id: 2, dname: '개발팀' } }  ⇐ deptMap.get(2)

const hong = { id: 1, name: 'Hong', dept: 1 } // hong.dept.name ⇒ deptMap.get(hong.dept)?.name
const kim = { id: 2, name: 'Kim', dept: 2 }
const emps = [hong, kim, { id: 3, name: 'Park', dept: 2 }, { id: 4, name: 'Choi', dept: 2 }]
const empMap = new Map()
for (const e of emps) {
	empMap.set(e.id, e)
}
console.log(deptMap.get(hong.dept)?.dname)
console.log(empMap) // Map(2) { 1 => {id: 1, name: 'Hong', dept: 1}, 2 => {id: 2, name: 'Kim', dept: 2}, … }

const empDept = new Map()
for (const [, { id, name, dept }] of empMap) {
	empDept.set({ id, name }, deptMap.get(dept))
}

console.log(empDept) // Map(4) { { id: 1, name: 'Hong' } => { id: 1, dname: '인사팀' }, { id: 2, name: 'Kim' } => { id: 2, dname: '개발팀' }, { id: 3, name: 'Park' } => { id: 2, dname: '개발팀' }, { id: 4, name: 'Choi' } => { id: 2, dname: '개발팀' } }
// console.log(empDept.get(kim)?.dname) // '개발팀'
// 개발팀 직원 목록 출력 ⇒ Kim, Park, Choi

assert.deepStrictEqual(
	[...empDept.keys()],
	emps.map(({ id, name }) => ({ id, name }))
)
// assert.strictEqual(empDept.get(kim)?.dname, devTeam.dname)

function getEmp(empId) {
	// {id:1, name: 'Hong', dept: {id:1, dname: 'Sale'}}
	for (const [{ id, name }, dept] of empDept) {
		if (id === empId) {
			return { id, name, dept }
		}
	}
}

assert.deepStrictEqual(getEmp(1), { id: 1, name: 'Hong', dept: { id: 1, dname: '인사팀' } })

// 연습문제 6
// 이전 Array.prototype에 Set을 이용하여 uniqBy() 함수도 추가하시오.
// Array.prototype.uniqBy = function(prop) {
//   …
// ]

Array.prototype.uniqBy = function (prop) {
	const set = new Set()
	for (const el of this) {
		set.add(el.dept)
	}
	return [...set]
}

import { USERS as users } from '../../localdata'
users.uniqBy('dept') // [ 'HR', 'Server', 'Front', 'Sales' ]

assert.deepStrictEqual(users.uniqBy('dept'), ['HR', 'Server', 'Front', 'Sales'])

// 연습문제 7
// 다음과 같은 집합 A, B, C가 있을 때,
// 각 집합의 교집합, 차집합, 합집합을 구하는 함수를 작성하시오.

const intersect = (a, b) => {
	const setA = new Set(a)
	const setB = new Set(b)
	return [...setA].filter((el) => setB.has(el))
}

const diff = (a, b) => {
	const setA = new Set(a)
	const setB = new Set(b)
	return [...setA].filter((el) => !setB.has(el))
}

const union = (a, b) => {
	// 합집합 -> 둘다 합쳐서 중복제거
	const setA = new Set(a)
	for (const el of b) setA.add(el)
	return [...setA]
}

const A = [1, 2, 3, 4, 5, 3]
const B = [1, 22, 3, 44, 5]
const C = [11, 222, 3, 4, 555]
assert.deepStrictEqual(intersect(A, B), [1, 3, 5])
assert.deepStrictEqual(intersect(A, C), [3, 4])
assert.deepStrictEqual(diff(A, B), [2, 4])
assert.deepStrictEqual(diff(B, A), [22, 44])
assert.deepStrictEqual(diff(A, C), [1, 2, 5])
assert.deepStrictEqual(diff(B, C), [1, 22, 44, 5])
assert.deepStrictEqual(union(A, B), [1, 2, 3, 4, 5, 22, 44])
assert.deepStrictEqual(union(A, C), [1, 2, 3, 4, 5, 11, 222, 555])
