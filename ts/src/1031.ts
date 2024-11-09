interface Animal {
	name: string
	m(n: number | boolean): void
}

interface Dog extends Animal {
	name: string
	m(n: number | string | boolean): void
}

class Ani implements Animal {
	name = 'Ani'
	m(n: number | string | boolean) {}
}

let ani: Ani = new Ani()
ani.m() // m(n: string | number) : void
let animal: Animal = ani
animal.m(false) // m(n: number)
