import assert from 'assert'

function ex1() {
	const dog = {
		name: 'Maxx',
		showMyName() {
			console.log(`My name is ${this.name}`)
		},
		whatsYourName() {
			// setTimeout(() => this.showMyName(), 1000)
			setTimeout(this.showMyName.bind(this), 1000)
		},
	}

	dog.whatsYourName()
}

ex1()
