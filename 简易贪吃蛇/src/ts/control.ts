/* food */
import { Food } from './food.ts'

/* score & level */
import { Brief } from './brief.ts'

/* snake */
import { Snake } from './snake.ts'

/* GAME CONTROL */
export class Control {
  food: Food
  brief: Brief
  snake: Snake
  
  // 运动方向
  direction: number = 68
  
  // 游戏状态 是否结束
  state: boolean = true
  
  constructor() {
    this.food = new Food()
    this.brief = new Brief()
    this.snake = new Snake()
    this.init()
  }
  
  init() {
    // 监听方向键(WASD)  将this指向实例
    document.addEventListener('keydown', this.onKeydown.bind(this))
    this.move()
  }
  
  // 监听方向键
  onKeydown(e: KeyboardEvent) {
    const key = e.keyCode
    // WASD： 87 65 83 68
    if (key === 87 || key === 65 || key === 83 || key === 68) this.direction = key
  }
  
  // 控制蛇移动
  move() {
    // W: top - 10  // A: left - 10 // S: top + 10  // D: left + 10
    let X = this.snake.X
    let Y = this.snake.Y
    
    switch (this.direction) {
      case 87:  // W
        Y -= 10
        break
      case 65:  // A
        X -= 10
        break
      case 83:  // S
        Y += 10
        break
      case 68:  // D
        X += 10
        break
    }
    
    // 判定吃到食物
    this.hasFood(X, Y)
    
    // 如果死亡会报错
    try {
      this.snake.X = X
      this.snake.Y = Y
    } catch (e) {
      // 死亡则游戏结束
      this.state = false
      alert('GAME OVER!')
    }
    
    // 定时移动 随等级加快
    this.state && setTimeout(() => this.move(), 300 - (this.brief.level - 1) * 30)
  }
  
  // 处理吃到食物的情况
  hasFood(X: number, Y: number) {
    if (X === this.food.X && Y === this.food.Y) {
      // 重置食物位置
      this.food.change()
      // 分数+1
      this.brief.addScore()
      // 身体增加一格
      this.snake.addBody()
    }
  }
}