// Emp type의 hong 객체에 fullName 기능을 Accessor Property를 사용하지 말고,
// proxy 생성자 함수를 이용하여 구현하시오.

import assert from 'assert'
class Emp {
	constructor() {
		this.firstName = ''
		this.lastName = ''

		const handler = {
			get(target, prop) {
				if (prop === 'fullName') {
					return `${target.firstName} ${target.lastName.toUpperCase()}`
				}
				return target[prop]
			},
			set(target, prop, value) {
				if (prop == 'fullName') {
					;[target.firstName, target.lastName] = value.includes(' ') ? value.split(' ') : [target.firstName, value]
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

hong.fullName = 'Kildong Hong'
assert.strictEqual(hong.fullName, 'Kildong HONG')
hong.fullName = 'Lee'
assert.strictEqual(hong.fullName, 'Kildong LEE')
