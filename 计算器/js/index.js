const nums = document.querySelectorAll('.num')
	const input = document.querySelector('input')
	const ul = document.querySelector('ul')

/* 输入值 */
 function compute(item) {
		if (input.value.indexOf('=') != -1) {
			input.value = ''
		}
		input.value += item
 }
	
/* 计算 */
function getResult() {
	let arr = []
	if (input.value.indexOf('/') != -1) {
		arr = input.value.split('/')
		input.value += '=' +  parseFloat((arr[0] / arr[1]))
	} else if (input.value.indexOf('%') != -1) {
		arr = input.value.split('%')
		input.value += '=' +  arr[0] % arr[1]
	} else {
		input.value += '=' +  eval(input.value)
	}
}
	
/* 清屏 */
function clearAll() {
	input.value = ''
}
	
/* 删除 */
function delStr() {
	let val = input.value
	input.value = val.slice(0, val.length - 1)
}

/* 得到倒数*/
function getRev() {
	input.value = '=' + (1 / input.value)
}

/* 得到平方 */
function getPrower() {
	let val = input.value
	input.value = '=' + (val ** 2)
}

/* 得到根号 */
function getRadic() {
	let val = input.value
	input.value = '=' + (Math.sqrt(val))
}

/* 得到相反数 */
function change() {
	input.value = input.value * (-1)
}