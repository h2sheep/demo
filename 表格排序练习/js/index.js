/* 待填入表格的数据 */
		const jsonData = [
			{
				name: "蕾姆",
				age: 18,
				email: "1234567890@qq.com",
				phone: "13245637823",
			},
			{
        name: "emt",
        age: 14,
        email: "4123456890@qq.com",
        phone: "13800026574"
			},
			{
				name: "拉姆",
				age: 18,
				email: "4123456780@qq.com",
				phone: "18723456423",
			},
			{
				name: "菜月昴",
				age: 20,
				email: "5234567890@qq.com",
				phone: "13800993302"
			},
			{
				name: "贝蒂",
				age: 17,
				email: "2234567890@qq.com",
				phone: "15802193302"
			}
		]
    
		const oTbody = document.querySelector('tbody')
		const thes = document.querySelectorAll('th')
    
		/* 插入数据 */
		insertData()
    
		/* 给th绑定点击事件 */
		for (let i = 0; i < thes.length; i++) {
			thes[i].onclick = function () {
				//重新排序
				reSort.call(this, i)
			}
		}
    
  /* 重新排序 */
  function reSort(i) {
    const trs = oTbody.children
    let trArr = [].slice.call(trs, 0)
    //默认降序排序
    trArr.sort((a, b) => {
      let innerA = a.children[i].innerHTML.slice(0, 5)
      let innerB = b.children[i].innerHTML.slice(0, 5)
      if (isNaN(innerA)) {
        return innerA.localeCompare(innerB)
      } else {
        return innerB - innerA
      }
    })
    //再次点击再次排序
    if (this.flag === 'asc') {
      trArr.reverse()
      this.flag = 'desc'
    } else {
      this.flag = 'asc'
    }
    //排序后重新渲染
    let frg = document.createDocumentFragment()
    for (let i = 0; i < trArr.length; i++) {
      frg.appendChild(trArr[i])
    }
    oTbody.appendChild(frg)
  }
    
function insertData() {
  let str = ''
  if (jsonData && jsonData.length !== 0) {
    for (let i = 0; i < jsonData.length; i++) {
      str += `<tr>`
      for (let key in jsonData[i]) {
        str += `<td>${jsonData[i][key]}</td>`
      }
      str += `</tr>`
    }
  }
  oTbody.innerHTML = str
}