import { FC } from "react"
import { ITodo } from "../typings"
import TDItem from "./Item"

interface IProps {
  list: ITodo[]
  removeTodo: (id: number) => void
  toggleTodo: (id: number) => void
}

const TDList: FC<IProps> = ({ list, removeTodo, toggleTodo }) => {

  return (
    <div>
      {
        list.map(todo => <TDItem 
          todo={ todo } 
          removeTodo={ removeTodo }
          toggleTodo={ toggleTodo }
          key={ todo.id }
        />)
      }
    </div>
  )
}

export default TDList