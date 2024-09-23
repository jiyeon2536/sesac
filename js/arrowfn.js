const Dog = function (name) {
	console.log(this, new.target, this instanceof Dog)
	this.name = name
	this.bark = function () {
		// 함수 선언문
		console.log('bark=', new.target, this.name, name)
	}
	this.bark2 = () => {
		// 화살표 함수
		console.log('bark2=', new.target, this.name, name)
	}
}

const dog = Dog('Doggy')
const lucy = new Dog('Lucy')
// Dog.bark() 에러남
lucy.bark()
lucy.bark2()
console.log('type=', typeof dog)
console.log('type=', typeof lucy)

const Cat = (name) => {
	// console.log(this, new.target) > 에러남
	this.name = name
	this.bark = function () {
		console.log('bark=', new.target, this.name, name)
	}
	// this.bark2 = () => console.log('bark2=', new.target, this.name, name) 에러남
	return this
}

const cat = Cat('coco')
// const cadt = new Cat('coco') 에러남
cat.bark()
// cat.bark2() .. 에러
// Cat.bark() .. 에러
console.log('type=', typeof cat)
