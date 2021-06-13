import { ACTION_TYPE, IAction, IState, ITodo } from "./typings"

function todoReducer(state: IState, action: IAction): IState {
  const { type, payload } = action

  switch (type) {
    case ACTION_TYPE.INIT_TODO:
      return {
        ...state,
        todoList: payload as ITodo[]
      }
    case ACTION_TYPE.ADD_TODO:
      return {
        ...state,
        todoList: [...state.todoList, payload as ITodo]
      }
    case ACTION_TYPE.REMOVE_TODO:
      return {
        ...state,
        todoList: state.todoList.filter((todo: ITodo) => todo.id !== payload as number)
      }
    case ACTION_TYPE.TOGGLE_TODO:
      return {
        ...state,
        todoList: state.todoList.map((todo: ITodo) => {
          if (todo.id === payload) todo.completed = !todo.completed
          return todo
        })
      }
    default:
      return state
  }
}

export {
  todoReducer
}