const wrap = document.querySelector('.wrap')
const mark = document.querySelector('.mark')
const hdWrap = document.querySelector('.hiddenwrap')
const largeImg = document.getElementsByTagName('img')[1]

/* 监听鼠标移入事件 */
wrap.onmouseenter = function () {
  //显示放大镜
  mark.style.display = 'block'
  //让隐藏部分显示
  hdWrap.style.display = 'block'
  /* 监听鼠标移动 */
  window.onmousemove = function (e) {
    let left = e.pageX - wrap.offsetLeft - mark.clientWidth / 2
    let top = e.pageY - wrap.offsetTop - mark.clientHeight / 2
    let maxLeft = wrap.clientWidth - mark.clientWidth
    let maxTop = wrap.clientHeight - mark.clientHeight
    //对移动空间进行限制
    left >= maxLeft ? left = maxLeft : left = left,
    left <= 0 ? left = 0 : left = left
    top >= maxTop ? top = maxTop : top = top,
    top <= 0 ? top = 0 : top = top
    //让鼠标位于放大镜中心
    mark.style.left = left + 'px'
    mark.style.top = top + 'px'
    /*显示需要放大部分*/
    hdWrap.scrollLeft = left / maxLeft * (largeImg.clientWidth - hdWrap.clientWidth)
    hdWrap.scrollTop = top / maxTop * (largeImg.clientHeight - hdWrap.clientHeight)
  }
  
  /* 监听鼠标离开 */
  wrap.onmouseleave = function (e) {
    //隐藏放大镜
    mark.style.display = 'none'
    //隐藏放大图
    hdWrap.style.display = 'none'
    //移除监听
    window.onmousemove = null
    wrap.onmouseleave = null
  }
}

/* 
  * 计算放大图片的偏移量涉及一点数学运算
  * 初始的偏移量之比 = 放大的偏移量之比
 */