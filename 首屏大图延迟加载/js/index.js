const oDiv = document.getElementById('box')

/* 假定延迟1s加载 看出效果*/
window.setTimeout(imgLoad, 1000)

/* 加载图片 */
function imgLoad() {
  //创建一个img
  let oImg = new Image
  oImg.src = './img/demo.png'
  oImg.alt = 'htt2.0'
  
  //图片载入成功后再触发onload事件
  oImg.onload = function () {
    oDiv.appendChild(oImg)
    
    //过渡效果 渐渐显现
    transition(this)
  }
}

/* 添加过渡效果 */
function transition(ele) {
  let val = 0
  changeOpa()
  
  function changeOpa() {
    //开局清除定时器
    clearTimeout(ele.timer)
    ele.style.opacity = val
    val += 0.02
    if (val >= 1) {
      ele.style.opacity = 1
    }
    ele.timer = setTimeout(changeOpa, 10)
  }
}