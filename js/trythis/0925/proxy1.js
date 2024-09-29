function f() {
	obj = new Object()
	Object.defineProperty(obj, 'a', { value: 99 })
	return obj
}

const ff = new f()
console.log(ff, constructor.name)

// 프록시는 object 임
