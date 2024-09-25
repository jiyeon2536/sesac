// Emp type의 hong 객체에 fullName 기능을 Accessor Property를 사용하지 말고,
// proxy 생성자 함수를 이용하여 구현하시오.

class Emp {
	constructor() {
		this.firstName = ''
		this.lastName = ''

		const handler = {
			get(target, prop) {
				if (prop === 'fullName') {
					return `${target.firstName} ${target.lastName}`
				}
				return target[prop]
			},
			set(target, prop, value) {
				console.log('proxy.set >>', target, prop, value)
				if (prop == 'fullName') {
					const [f, l] = value.split(' ')
					if (l === undefined) {
						target.lastName = f.toUpperCase()
					} else {
						target.firstName = f
						target.lastName = l.toUpperCase()
					}
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

hong.fullName = 'Kildong Hong' // split하여 firstName, lastName 셋
console.log(hong.fullName) // 'Kildong HONG' 출력하면 통과!
hong.fullName = 'Lee'
console.log(hong.firstName, hong.lastName) // 'Kildong LEE' 출력하면 통과!
