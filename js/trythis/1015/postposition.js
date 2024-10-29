import assert from 'assert'

// 1. 문자열이 한글 자음으로 끝나는지 체크하는 함수를 작성하시오.

const ㄱ = 'ㄱ'.charCodeAt()
const ㅎ = 'ㅎ'.charCodeAt()
const 가 = '가'.charCodeAt()
const 힣 = '힣'.charCodeAt()

const 알파넘 = [...'LMNRlmnr136780'].map((a) => a.charCodeAt())

function isEndJaum(str) {
	if (!str) throw new Error('at least 1 string must be given')
	const lc = str.charCodeAt(str.length - 1)

	return (ㄱ <= lc && lc <= ㅎ) || 알파넘.includes(lc) || (가 <= lc && lc <= 힣 && (lc - 가) % 28 !== 0)
}

isEndJaum('강원도') // false
isEndJaum('바라당') // true
isEndJaum('ㅜㅜ') // false
isEndJaum('케잌') // true
isEndJaum('점수 A') // false lmnr   cf. isEndJaum('알파벳L')은 true
isEndJaum('24') // false   cf. isEndJaum('23')은 true 136780

assert.equal(isEndJaum('아지오'), false)
assert.equal(isEndJaum('북한강'), true)
assert.equal(isEndJaum('뷁'), true)
assert.equal(isEndJaum('강원도'), false)
assert.equal(isEndJaum('바라당'), true)
assert.equal(isEndJaum('ㅜㅜ'), false)
assert.equal(isEndJaum('케잌'), true)
assert.equal(isEndJaum('점수 A'), false)
assert.equal(isEndJaum('알파벳L'), true)
assert.equal(isEndJaum('24'), false)
assert.equal(isEndJaum('23'), true)

const postposition = (str, josa) => {
	const [ja, mo] = josa.split('/')
	return isEndJaum(str) ? ja : mo
}

function iga(str) {
	return postposition(str, '이/가')
}

function eunun(str) {
	return postposition(str, '은/는')
}
function eulul(str) {
	return postposition(str, '을/를')
}
function eyuya(str) {
	return postposition(str, '이어야/여야')
}

assert.equal(`고성군${iga('고성군')}`, '고성군이')
assert.equal(`고성군${eunun('고성군')}`, '고성군은')
assert.equal(`고성군${eulul('고성군')}`, '고성군을')
assert.equal(`성동구${iga('성동구')}`, '성동구가')
assert.equal(`성동구${eunun('성동구')}`, '성동구는')
assert.equal(`성동구${eulul('성동구')}`, '성동구를')
assert.equal(`고성군${eyuya('고성군')}`, '고성군이어야')
assert.equal(`성동구${eyuya('성동구')}`, '성동구여야')
