export interface ITodo {
  id: number
  content: string
  completed: boolean
}

export interface IState {
  todoList: ITodo[]
}

export interface IAction {
  type: ACTION_TYPE
  payload: ITodo | ITodo[] | number
}

export enum ACTION_TYPE {
  INIT_TODO = 'initTodo',
  ADD_TODO = 'addTodo',
  REMOVE_TODO = 'removeTodo',
  TOGGLE_TODO = 'toggleTodo'
}