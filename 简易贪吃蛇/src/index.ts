/* style */
import './style/style.less'

/* control */
import { Control } from './ts/control.ts'


const oBtn = document.getElementById('start-btn')!

// 监听按钮点击
oBtn.addEventListener('click', () => {
  // 创建游戏控制器
  new Control()
  // 隐藏按钮
  oBtn.style.visibility = 'hidden'
})