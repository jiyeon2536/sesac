// 연습문제 1
// user 객체를 받아서 id와 name을 출력하는 함수를 3개의 함수로 작성하시오.
// (Function signature를 3개 이상으로 표현하기)

// 함수선언문
function f(user) {
	console.log('f', user.id, user.name)
}

function f1({ id, name }) {
	console.log('f1', id, name)
}

// 화살표 함수
const f2 = ({ id, name }) => {
	console.log('f2', id, name)
}

// 함수표현식
const f3 = function (user) {
	console.log('f3', user.id, user.name)
}

const info = function (user) {
	return function () {
		console.log(user.id, user.name)
	}
}

const hong = { id: 1, name: 'Hong' }
const lee = { id: 2, name: 'Lee' }

f(hong)
f1(hong)
f2(hong)
f3(hong)

const f4 = info(hong)
f4()
const f5 = info(lee)
f5()

// 연습문제 2
// 다음 user 객체에서 passwd 프로퍼티를 제외한 데이터를
// userInfo 라는 변수에 할당하세요

const user = { id: 1, name: 'Hong', passwd: 'xxx', addr: 'Seoul' }
const { passwd, ...userInfo } = user

console.log(userInfo)

// 연습문제 3
// 다음 arr에서 3개의 id를 id1, id2, id3로 할당하세요

const arr = [[{ id: 1 }], [{ id: 2 }, { id: 3 }]]
const [[{ id: id1 }], [{ id: id2 }, { id: id3 }]] = arr

console.log(id1, id2, id3)

// 연습문제 4
const user4 = { name: 'Hong', passwd: 'xyz', addr: 'Seoul' }

// function getValueExceptInitial(k) {
// 	const [, ...res] = user4[k]
// 	return res.join('')
// }

// function getValueExceptInitial(k) {
// 	const res = [...user4[k]]
// 	return res.splice(1).join('')
// }

// function getValueExceptInitial(k) {
// 	const val = [...user4[k]]
// 	const [, ...res] = [...val]
// 	return res.join('')
// }

function getValueExceptInitial(k) {
	const { [k]: val } = user4
	const [, ...res] = [...val]
	return res.join('')
}

console.log(getValueExceptInitial('name')) // 'ong'
console.log(getValueExceptInitial('passwd')) // 'yz'
console.log(getValueExceptInitial('addr')) // 'eoul'
