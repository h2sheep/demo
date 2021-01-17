const btn = document.getElementById('back')
  //页面可见高度
const ch = document.documentElement.clientHeight

/* 监听滚动条 */
window.addEventListener('scroll', bodyScroll)

/* 按钮点击回到顶部 */
btn.addEventListener('click', toTop)

function bodyScroll() {
  //滚动高度
  let sc = document.documentElement.scrollTop
  //显现回到顶部按钮 个人认为滑到一半高度显现按钮体验更好@_@
  if (sc >= 0.5 * ch) {
    btn.style.visibility = 'visible'
  } else {
    btn.style.visibility = 'hidden'
  }
}

function toTop() {
  //开局一个清除定时器
  clearTimeout(btn.timer)
  //初始化
  btn.timer = null
  //设置一个上升速度
  let speed = 300
  //高度递减
  document.documentElement.scrollTop -= speed
  //最后突然加速的效果
  if (document.documentElement.scrollTop - 500 <= 0) {
    document.documentElement.scrollTop = 0
    //直接退出 不再调用
    return
  }
  // toTop()   //直接调用太快了 
  //利用定时器达到渐渐缩短的效果
  btn.timer = setTimeout(toTop, 50)
}