/* 获取元素 */
const trashCan = document.querySelector('.trash-can')
const file = document.querySelector('.file')

/* 给文件监听鼠标点击下去时的事件 */
file.addEventListener('mousedown', e => {
  // 获取文件到鼠标的偏移量
  const left = e.pageX - file.offsetLeft
  const top = e.pageY - file.offsetTop
  
  /* 监听鼠标的移动事件 */
  window.addEventListener('mousemove', move)
  
  /* 监听鼠标松开的事件 */
  file.addEventListener('mouseup', mouseUp)
  
  
  function move(e) {
    // 让文件随鼠标移动
    file.style.left = e.pageX - left + 'px'
    file.style.top = e.pageY - top + 'px'
  }
  
  function mouseUp(e) {
    // 获取此时文件的偏移量
    const fileLeft = getComputedStyle(file).left
    const fileTop = getComputedStyle(file).top
    //判断是否在回收站区域内
    if (parseFloat(fileLeft) <= 150 && parseFloat(fileTop) <= 300) {
      /* 删除文件 */
      file.parentNode.removeChild(file)
      alert('删除成功~~')
    } else {
      file.style.left = fileLeft
      file.style.top = fileTop
    }
    //移出事件监听 释放空间
    window.removeEventListener('mousemove', move)
    file.removeEventListener('mouseup', mouseUp)
  }
})