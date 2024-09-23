// 연습문제 3
// 아래 users 배열에 대하여 추가/수정/삭제하는 순수 함수를 작성하시오.
const assert = require('assert')

const hong = { id: 1, name: 'Hong' }
const choi = { id: 5, name: 'Choi' }
const kim = { id: 2, name: 'kim' }
const lee = { id: 3, name: 'Lee' }
const park = { id: 4, name: 'Park' }
const users = [kim, lee, park] // 오염되면 안됨!!

users.addUser = function (user) {
	return [...this, user]
}

users.removeUser = function (user) {
	return this.filter(({ id }) => id !== user.id)
}

users.changeUser = function (from, to) {
	return this.map((user) => (user.id === from.id ? to : user))
}

Object.defineProperty(users, 'addUser', { enumerable: false })
Object.defineProperty(users, 'removeUser', { enumerable: false })
Object.defineProperty(users, 'changeUser', { enumerable: false })

users.addUser(hong) // [kim, lee, park, hong]
users.removeUser(lee) // [kim, park]
users.changeUser(kim, choi) // [choi, lee, park]
// // (주의) Array.prototype 조작 금지!

assert.deepStrictEqual(users.addUser(hong), [kim, lee, park, hong])
assert.deepStrictEqual(users, [kim, lee, park])

assert.deepStrictEqual(users.removeUser(lee), [kim, park])
assert.deepStrictEqual(users, [kim, lee, park])

assert.deepStrictEqual(users.changeUser(kim, choi), [choi, lee, park])
assert.deepStrictEqual(users, [kim, lee, park])
