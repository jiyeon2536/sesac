'use strict'
var gg = 1
let bb = 2

function f1(x, y) {
	var gg = 11
	let bb = 22
	console.log('f1>', gg, bb, zz, f2, f2.length) // f1> 11 22 undefined [Function: f2] 얘가 올라옴 3
	f2('* first') // * first `inner2` 9 undefined 얘임.
	{
		const xx = 99
		f2('* nest-first') // * nest-first `nested` 99 undefined  쟤가 올라옴
		var zz = 88
		function f2(t) {
			console.log(t, '`nested`', xx, zz) // 쟤
		}
	}
	function f2(t, u) {
		console.log(t, '`inner`', xx, zz)
	}
	function f2(t, u, v) {
		console.log(t, '`inner2`', xx, zz)
	} // 얘
	var zz = 800
	console.log('🚀  gg:', gg) // 🚀  gg: 11
	f2('* second') // * second `inner2` 9 800
}

function f2(g) {
	console.log(g, 'global f2>', gg, bb, xx, kk) //  * third global f2> 1 2 9 33
}

let xx = 9

if (gg > 0) {
	var kk = 33
	const yy = 9
}
f1(1, 2)
console.log('kkkkk>>', kk) // kkkkk>> 33
f2('* third') //  * third global f2> 1 2 9 33
