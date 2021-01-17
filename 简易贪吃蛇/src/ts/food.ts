/* Food */
export class Food {
  ele: HTMLElement
  
  constructor() {
    // ！表示确定有值
    this.ele = document.getElementById('food')!
  }
  
  // x轴坐标
  get X() {
    return this.ele.offsetLeft
  }
  
  // y轴坐标
  get Y() {
    return this.ele.offsetTop
  }
  
  // 随机生成位置
  change() {
    // 0px - 350px之间, 10 px/per
    const top = Math.round(Math.random() * 34) * 10
    const left = Math.round(Math.random() * 34) * 10
    this.ele.style.top = top + 'px'
    this.ele.style.left = left + 'px'
  }
}
