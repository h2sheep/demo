import { FC, useEffect, useReducer } from "react"
import TDInput from "./Input"
import TDList from "./LIst"
import { todoReducer } from "./todo-reducer"
import { ACTION_TYPE, ITodo } from "./typings"

function init(initTodoList: ITodo[]) {
  return {
    todoList: initTodoList
  }
}

const TodoList: FC = () => {
  // todo-list
  const [state, dispatch] = useReducer(todoReducer, [], init)
  
  // 初始获取todolist
  useEffect(() => {
    const todoList = JSON.parse(localStorage.getItem('todo-list') || '[]')
    dispatch({
      type: ACTION_TYPE.INIT_TODO,
      payload: todoList
    })
  }, [])

  // 更新todolist
  useEffect(() => localStorage.setItem('todo-list', JSON.stringify(state.todoList)), [state.todoList])

  const addTodo = (todo: ITodo) => dispatch({
    type: ACTION_TYPE.ADD_TODO,
    payload: todo
  })

  const removeTodo = (id: number) => dispatch({
    type: ACTION_TYPE.REMOVE_TODO,
    payload: id
  })

  const toggleTodo = (id: number) => dispatch({
    type: ACTION_TYPE.TOGGLE_TODO,
    payload: id
  })

  return (
    <div>
      <TDInput 
        list={state.todoList}
        addTodo={ addTodo } 
      />
      <TDList 
        list={state.todoList}
        removeTodo={ removeTodo }
        toggleTodo= { toggleTodo }
      />
    </div>
  )
}

export default TodoList