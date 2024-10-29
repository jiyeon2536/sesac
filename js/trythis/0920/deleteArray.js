// 연습문제 2
// 다음과 같은 deleteArray를 순수 함수로 작성하시오.
import assert from 'assert'

const arr = [1, 2, 3, 4]

function deleteArray(array, arg1, arg2) {
	if (Number.isInteger(arg1)) {
		if (!arg2) return array.slice(0, arg1)
		return [array.slice(0, arg1), array.slice(arg2, array.length)].flat(Infinity)
	}
	return array.filter((el) => el[arg1] !== arg2)
}

const deleteArray = (arr, startOrKey, endOrValue = arr?.length) => {
	if (!arr || !Array.isArray(arr)) return []
	// end = end ?? arr.length - 1 // undefined나 null 이면
	if (typeof startOrkey === 'number') return arr.filter((_, idx) => idx < startOrKey || idx > endOrValue)
}

assert.deepStrictEqual(deleteArray(arr, 2), [1, 2])
assert.deepStrictEqual(deleteArray(arr, 1, 3), [1, 4])
assert.deepStrictEqual(arr, [1, 2, 3, 4])

const Hong = { id: 1, name: 'Hong' }
const Kim = { id: 2, name: 'Kim' }
const Lee = { id: 3, name: 'Lee' }
const users = [Hong, Kim, Lee]

assert.deepStrictEqual(deleteArray(users, 2), [Hong, Kim])
assert.deepStrictEqual(deleteArray(users, 1, 2), [Hong, Lee])
assert.deepStrictEqual(deleteArray(users, 'id', 2), [Hong, Lee])
assert.deepStrictEqual(deleteArray(users, 'name', 'Lee'), [Hong, Kim])
assert.deepStrictEqual(users, [Hong, Kim, Lee])
