// 연습문제 4
// ex1) 배열의 각 원소를 String으로 변환하시오.
const assert = require('assert')

const arr = [1, 2, 3, true]
const ret1 = arr.map((el) => el?.toString()) // (<이 부분을 작성하시오>);
// const ret11 = arr.map((el) => String(el))
const ret11 = arr.map(String)

assert.deepStrictEqual(ret1, ['1', '2', '3', 'true'])

//ex2) 다음과 같이 작동하는 classNames 함수를 작성하시오.
const classNames = (...args) =>
	args
		.map((el) => el.trim())
		.filter((el) => el !== '')
		.join(' ')

const classNames1 = (...args) => args.filter((a) => !!a).join(' ')
const classNames2 = (...args) => args.filter(Boolean).join(' ')
const classNames3 = (...args) => args.map(String).filter(Boolean).join(' ') // null, 숫자, undefined 모두 처리됨

const ret2 = classNames('', 'a b c', 'd', '', 'e')
assert.strictEqual(ret2, 'a b c d e')
// 주의: ' a b c d  e'면 안됨!!
// cf. example in React
// <div classNames=({x ? 'a b' : ''}, {'' ? 'c' : ''}, {z && 'e f'})
