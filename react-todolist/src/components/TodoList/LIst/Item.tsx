import { FC } from "react"
import { ITodo } from "../typings"

interface IProps {
  todo: ITodo
  removeTodo: (id: number) => void
  toggleTodo: (id: number) => void
}

const TDItem: FC<IProps> = ({ todo, removeTodo, toggleTodo }) => {

  const { id, content, completed } = todo

  return (
    <div>
      <input type="checkbox" 
        checked={ completed }
        onChange={() => toggleTodo(id)}
      />
      <span
        style={ { color: completed ? "#999" : "#000" } }
      >{ content }</span>
      <button onClick={() => removeTodo(todo.id)}>删除</button>
    </div>
  )
}

export default TDItem