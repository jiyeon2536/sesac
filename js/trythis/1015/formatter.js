const assert = require('assert')
// 문자열 str에서 대문자만 골라 소문자로 변환하세요. (trythis: 대문자 <-> 소문자)
const upperToLower = (from) => {
	return from.replace(/([A-Z])/g, (matchedStr, pos, orgStr) => `*${matchedStr.toLowerCase()}*-`)
}

const tmp = upperToLower('Senior Coding Learning JS')
// ⇒ '*s*-enior *c*-oding *l*-earning *j*-*s*-'

// 전화번호를 정확한 형식으로 출력하는 함수를 작성하시오.
const telfmt = (from) => {
	if (from.length === 12) return from.replace(/(\d{4})(\d{4})(\d{4})/, '$1-$2-$3')
	if (from.length === 11) return from.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3')
	if (from.length === 10) {
		if (from.startsWith('02')) return from.replace(/(\d{2})(\d{4})(\d{4})/, '$1-$2-$3')
		return from.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3')
	}
	if (from.length === 9) return from.replace(/(\d{2})(\d{3})(\d{4})/, '$1-$2-$3')
	if (from.length === 8) return from.replace(/(\d{4})(\d{4})/, '$1-$2')
}

// ex) in JSX
//    <small>{telfmt(user.tel)}</small>

assert.strictEqual(upperToLower('Senior Coding Learning JS'), '*s*-enior *c*-oding *l*-earning *j*-*s*-')
assert.deepStrictEqual(telfmt('0101234567'), '010-123-4567')
assert.deepStrictEqual(telfmt('01012345678'), '010-1234-5678')
assert.deepStrictEqual(telfmt('0212345678'), '02-1234-5678')
assert.deepStrictEqual(telfmt('021234567'), '02-123-4567')
assert.deepStrictEqual(telfmt('0331234567'), '033-123-4567')
assert.deepStrictEqual(telfmt('15771577'), '1577-1577')
assert.deepStrictEqual(telfmt('07012341234'), '070-1234-1234')
assert.deepStrictEqual(telfmt('050712345678'), '0507-1234-5678')
