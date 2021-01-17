/* 模拟后台获取的数据 */
const imgData = [
  { src: './img/1.jpg', txt: '1'},
  { src: './img/2.jpg', txt: '2' },
  { src: './img/3.jpg', txt: '3' },
  { src: './img/4.jpg', txt: '4' },
  { src: './img/5.jpg', txt: '5' }
]


const oUl = document.querySelector('ul')
const oDiv = document.querySelector('div')

/* 创建文档碎片 */
const frg = document.createDocumentFragment()
for (let val of imgData) {
  let oLi = document.createElement('li')
  oLi.innerHTML = `
    <img data-src="${val.src}" src="./images/loading.gif" alt="${val.txt}">
    <p>${val.txt}</p>
  `
  frg.appendChild(oLi)
}
/* 插入到ul中 */
oUl.appendChild(frg)

/* 第一眼快速加载 */
window.setTimeout(imgLoad, 100)

/* 滚轮滑动加载 */
window.addEventListener('scroll', throttle(imgLoad, 200))

/* 点击返回顶部 */
oDiv.addEventListener('click', toTop)

/* 图片加载 */
function imgLoad() {
  // console.log(1)
  let oImg = document.querySelectorAll('img')
  //当前页面可视高度
  let ch = document.documentElement.clientHeight
  //滚轮滑动距离
  let st = document.documentElement.scrollTop
  //到原始顶部距离
  let ct = ch + st
  for (let i = 0; i < oImg.length; i++) {
    //到原始页面顶部距离	此时相对于body
    let imgTop = oImg[i].offsetTop
    if (imgTop <= ct) {
      //换回真正的src
      oImg[i].src = oImg[i].dataset.src
    }
  }
  /* 返回顶部样式设置 */
  st >= ch * 0.5 ? oDiv.style.display = 'block' : oDiv.style.display = 'none'
}

/* 节流 */
function throttle(fn, delay) {
  let preTime = Date.now()
  let timer = null
  return function () {
    clearTimeout(timer)
    let args = arguments
    let curTime = Date.now()
    let remainTime = delay - (curTime - preTime)
    if (remainTime <= 0) {
      fn.apply(this, args)
      preTime = Date.now()
    } else {
      timer = setTimeout(() => {
        fn.apply(this, args)
      }, remainTime)
    }
  }
}

/* 返回顶部 */
function toTop() {
  //滑动速度
  const speed = 200
  let timer = null
  move()
  function move() {
    //开局一个清除定时器
    clearTimeout(timer)
    //过渡
    document.documentElement.scrollTop -= speed
    //最后加速效果
    if (document.documentElement.scrollTop -500 <= 0) {
      document.documentElement.scrollTop = 0
      //退出
      return
    }
    timer = setTimeout(move, 10)
  }
}