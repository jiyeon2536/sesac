function f() {
	f.x = 3
}

console.log(f.x)

const af = () => {
	this.name = name
	this.if1 = function () {
		return this.name
	}
	this.if2 = () => {
		return this.name
	}
	return this
}

const c = af()
