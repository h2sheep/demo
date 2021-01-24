/* todo list */

// list item 结构
interface ITodoItem {
  id: number
  content: string
  status: TODO_STATUS
}

// list
interface ITodoList {
  list: ITodoItem[]
}

// item 有三种状态
enum TODO_STATUS {
  DOING = 'doing',
  WILLDO = 'willdo',
  DONE = 'done'
}

export {
  ITodoItem,
  ITodoList,
  TODO_STATUS
}