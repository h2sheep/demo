/* snake */
export class Snake {
  // snake wrap
  wrapEle: HTMLElement
  // snake head
  head: HTMLElement
  // snake body
  body: HTMLCollection
  
  constructor() {
    this.wrapEle = document.getElementById('snake-wrap')!
    this.head = document.querySelector('.snake-item') as HTMLElement
    this.body = this.wrapEle.getElementsByTagName('div')
  }
  
  // snake head X
  get X() {
    return this.head.offsetLeft
  }
  
  // snake head Y
  get Y() {
    return this.head.offsetTop
  }
  
  set X(value: number) {
    // 值未改变就退出
    if (this.X === value) return
    
    // 判断边界
    if (value < 0 || value > 340) throw new Error('you die!')
    
    // 判断是否发生掉头情况
    if ((this.body[1] as HTMLElement)?.offsetLeft === value) {
      // 如果此时的位置大于原来位置 则继续往左走 反之同理
      value = value > this.X ? this.X - 10 : this.X + 10
    }
    
    // 移动身体
    this.moveBody()
    
    // 移动头部
    this.head.style.left = value + 'px'
    
    // 检测是否撞到自己
    this.hasSelf()
  }
  
  set Y(value: number) {
    // 值未改变就退出
    if (this.Y === value) return
    
    // 判断边界
    if (value < 0 || value > 340) throw new Error('the snake die!')
    
    // 判断是否发生掉头情况
    if ((this.body[1] as HTMLElement)?.offsetTop === value) {
      value = value > this.Y ? this.Y - 10 : this.Y + 10
    }
    
    // 移动身体
    this.moveBody()
    
    // 移动头部
    this.head.style.top = value + 'px'
    
    // 检测是否撞到自己
    this.hasSelf()
  }
  
  // 增加身体
  addBody() {
    const oDiv = document.createElement('div')
    oDiv.className = 'snake-item'
    // 末尾添加
    this.wrapEle.insertAdjacentElement('beforeend', oDiv)
  }
  
  // 移动身体
  moveBody() {
    // 核心思想：后截身体移动到前一截身体的位置
    const len = this.body.length
    let temp
    for (let i = len - 1; i > 0; i--) {
      temp = this.body[i] as HTMLElement
      
      // 获取前面的位置
      const X = (this.body[i - 1] as HTMLElement).offsetLeft
      const Y = (this.body[i - 1] as HTMLElement).offsetTop
      
      // 往前移动
      temp.style.left = X + 'px'
      temp.style.top = Y + 'px'
    }
  }
  
  // 判定是否撞到自身
  hasSelf() {
    const len = this.body.length
    let temp
    // 排除蛇头
    for (let i = 1; i < len - 1; i++) {
      temp = this.body[i] as HTMLElement
      if (temp.offsetLeft === this.X && temp.offsetTop === this.Y) throw new Error('you die!')
    }
  }
}