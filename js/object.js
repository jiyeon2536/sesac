const user = {
	'': 1,
	' ': 1, // 'id': 1, '0y': 2 모두 OK!
	123: 1, // user[123], user['123'] OK, but user.123 is SyntaxError!!
	[12345n.toString()]: 2, // user[12345], user[12345n], user['12345'] OK, but user['12345n'] is undefined!
	true: 1, // OK  user[true]  user.true
	id: 2,
	[`name`]: 'Hong', // But, `name`: 'Hong'은 SyntaxError: Unexpected template string!
	[Symbol()]: 'Hong', // OK But, Symbol(): 'Hong'은 SyntaxError: Unexpected token ':'
	[`${new Date()}`]: 365, // OK! 'Sun Jul …': 365
	'my-friends': ['Han', 'Kim'],
	getInfo: () => `${this.id}-${this.name}`, // OK! But, this is not user!
	// 함수 리터럴을 가진 프로퍼티임.
	getInfo() {
		return `${this.id}-${this.name}`
	}, // OK! getInfo의 최종 <f.o>
	// 이건 메소드임.
}

console.log('🚀 ~ user:', user)
console.log('----')

const keys = Object.keys(user)
const values = Object.values(user)
console.log('🚀 ~ values:', values)
const entries = Object.entries(user) // 2차원배열
console.log('🚀 ~ entries:', entries)
console.log('🚀 ~ keys:', keys)
console.log('🚀 ~ keys:', Reflect.ownKeys(user)) // 이렇게 하면 심볼도 보임

const b = 123n
console.log('>>' + b + true + null)
console.log('id' in user, user.hasOwnProperty('id')) // 전자가 더 낫다..
// 리터럴은 괄호로 싸줘야함

delete user['']

Reflect.deleteProperty(user, ' ')

//- ------
function entriesWithSymbol(obj) {
	const rets = []
	if (!obj || typeof obj !== 'object') return []
	for (const k of Reflect.ownKeys(obj)) {
		console.log('k=', k)
		rets.push([k, obj[k]])
	}
	return rets
}
console.log('ref.entries>>')
entriesWithSymbol(user)

//---
// 객체 class (static) methods
Object.getOwnPropertyDescriptor(user, 'id')
Object.getOwnPropertyDescriptors(user)
Object.defineProperty(user, 'age', { value: 39, writable: false })
// age는 writable, enumerable, configurable 모두 false => Object.keys()에서 제외

Object.assign({ x: 100 }, user)
const a = { x: 100, ...user }
new Object(user)
Object.create(user)
// Object의 생성자함수에 매개변수로 object를 주면 그대로 반환.

// Object.create 는 prototype에
const u1 = Object.assign({}, user)
const u2 = { ...user }
const u3 = new Object(user)
const u4 = Object.create(user)

console.log('u1=', u1, user === u1) // false
console.log('u2=', u2, user === u2) // false
console.log('u3=', u3, user === u3) // true
console.log('u4.proto=', Object.getPrototypeOf(u4))

const park = Object.fromEntries([
	['id', 7],
	['nm', 'Park'],
])

Object.preventExtensions(user) // 추가x, 삭제o, 읽기o, 쓰기o, 재정의o
Object.seal(user) // 추가x, 삭제x, 읽기o, 쓰기o, 재정의x (밀봉, writable:true인 것은 변경 가능)
Object.freeze(user) // 추가x, 삭제x, 읽기o, 쓰기x, 재정의x (enumerable외 모두 false)

// 값을 할당해도 오류는 없다. 단, 하위(중첩) 객체까지 동결(freeze)하지 못함

user['my-friends'][0] = 'Choi'
