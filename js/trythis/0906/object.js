import assert from 'assert'

// 연습문제 1
const arr = [100, 200, 300, 400, 500, 600, 700]
// 1) for-in문을 사용하여 배열의 인덱스(키)를 출력하시오. in은 키를 찾는 연산자임.
for (const i in arr) {
	console.log(i)
}
console.log('----')

// 2) for-in문을 사용하여 배열의 원소(값)를 출력하시오. (of)
for (const i in arr) {
	console.log(arr[i])
}
console.log('----')

for (const el of arr) {
	console.log(el)
}
console.log('----')

const obj = { name: 'Kim', addr: 'Yongsan', level: 1, role: 9, receive: false }

// 3. for-in문을 사용하여 프로퍼티 이름(키)을 출력하시오.
for (const k in obj) {
	console.log(k)
}
console.log('----')

// 4. for-in문을 사용하여 프로퍼티 값을 출력하시오.
for (const key in obj) {
	console.log(obj[key])
}
console.log('----')

// 5. for-of문을 사용하여 프로퍼티 값을 출력하시오.
for (const v of Object.values(obj)) {
	console.log(v)
}
console.log('----')

// 6. level 프로퍼티가 열거(entries)되지 않도록 설정하시오.
Object.defineProperty(obj, 'level', { enumerable: false })

// 7. role 프로퍼티는 읽기전용으로 설정하시오. // Object.defineProperty
Object.defineProperty(obj, 'role', { writable: false })
for (const key in obj) {
	console.log(obj[key])
}

obj.role = 2
obj['role'] = 8

console.log(obj)
console.log(Object.entries(obj))
console.log('----')

// 연습문제 2
// 배열을 객체로 만드시오. (makeObjectFromArray)
// { 'A': [10, 20], 'B': [30, 40], 'C': [50, 60, 70] }
const arr1 = [
	['A', 10, 20],
	['B', 30, 40],
	['C', 50, 60, 70],
]

function makeObjectFromArray(arr) {
	let newObj = {}
	for (const [key, ...vals] of arr) {
		newObj[key] = vals
	}
	return newObj
}

const result = makeObjectFromArray(arr1)
assert.deepStrictEqual(result, { A: [10, 20], B: [30, 40], C: [50, 60, 70] }, 'result not equal!')
console.log('여기', result)
console.log('----')

// 위에서 만든 객체를 다시 배열로 만드시오. (makeArrayFromObject)
function makeArrayFromObject(obj) {
	let newArr = []
	for (const [key, val] of Object.entries(obj)) {
		newArr.push([key, ...val])
	}
	return newArr
}

const result1 = makeArrayFromObject(result)
console.log(result1)
console.log('----')

// 연습문제 3
// 원시값(primitive)만을 갖는 객체 kim을 복사하는 프로그램을
// Object의 클래스 메소드 또는 spread(...) 연산자를  사용하지 말고 작성하시오.

// 1) shallow copy
function shallowCopy(obj) {
	const copiedObj = {}
	// for (const o in obj) {
	// 	copiedObj[o] = obj[o]
	// }
	for (const [k, v] of Object.entries(obj)) {
		copiedObj[k] = v
	}
	return copiedObj
}

const kim = { nid: 3, nm: 'Kim', addr: 'Pusan' }
const newKim = shallowCopy(kim)
newKim.addr = 'Daegu'
console.log(kim.addr !== newKim.addr) // true면 통과!
console.log('----')
assert.notDeepStrictEqual(kim, newKim)

// 2) 이하 deep copy
// 재귀..
function deepCopy(origin) {
	if (obj === null || typeof origin !== 'object') return origin
	let inner = {}
	for (const a in origin) {
		inner[a] = deepCopy(origin[a])
	}
	return inner
}

const kim2 = {
	nid: 3,
	nm: 'Kim',
	addr: {
		city: 'Pusan',
		road: 'Haeundaero',
		zip: {
			code: 12345,
		},
	},
}
const newKim2 = deepCopy(kim2)
assert.deepStrictEqual(kim2, newKim2)
console.log('전', newKim2)
newKim2.addr.city = 'Daegu'
console.log(kim2.addr.city !== newKim2.addr.city) // true면 통과!
newKim2.addr.zip.code = 122
console.log(kim2.addr.zip.code !== newKim2.addr.zip.code) // true면 통과!
console.log(kim2.addr.zip.code, newKim2.addr.zip.code) // true면 통과!
console.log('후', kim2)
console.log('후', newKim2)
assert.notDeepStrictEqual(kim2, newKim2)

// --- assert 예시

// assert.deepStrictEqual(dataObj, { A: [10, 20], B: [30, 40], C: [50, 60, 70] }, 'dataObj is Not Equals!!')

assert.deepStrictEqual(
	makeObjectFromArray([['A', 10, 20], ['B'], [1, 2, 3]]),
	{ A: [10, 20], B: [], 1: [2, 3] },
	'dataObj is Not Equals!!'
)

function makeArrayFromObject(obj) {
	const results = []
	for (const [key, val] of Object.entries(obj)) {
		// console.log('🚀  key:', key, val);
		results.push([key, ...val])
	}
	return results
}
// const dataArr = makeArrayFromObject(dataObj)
// console.log('🚀  dataArr:', dataArr);
// assert.deepStrictEqual(dataArr, data)
//-----
