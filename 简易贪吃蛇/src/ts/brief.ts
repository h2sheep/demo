/* score & level */
export class Brief {
  // 初始化值
  score = 0
  level = 1
  // 元素
  scoreEle: HTMLElement
  levelEle: HTMLElement
  
  constructor() {
    this.scoreEle = document.getElementById('score')!
    this.levelEle = document.getElementById('level')!
  }
  
  // 加分
  addScore() {
    this.scoreEle.innerHTML = ++this.score + ''
    // 5分升1级
    if (this.score % 5 === 0) this.addLevel()
  }
  
  // 升等级
  addLevel() {
    // 最高10级
    if (this.level < 10) this.levelEle.innerHTML = ++this.level + ''
    console.log(this.level)
  }
}