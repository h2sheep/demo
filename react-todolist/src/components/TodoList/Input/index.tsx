import { FC, ReactElement, useRef } from "react"
import { ITodo } from "../typings"

interface IProps {
  list: ITodo[]
  addTodo: (todo: ITodo) => void
}

const TDInput: FC<IProps> = ({ list, addTodo }): ReactElement => {
  const currentInput = useRef<HTMLInputElement>(null)

  const onAddTodo = () => {
    const value = currentInput.current!.value.trim()
    if (!value.length) return

    console.log(value)

    // 添加todo
    list.find(todo => todo.content === value)
    ? window.alert('已经存在该内容')
    : addTodo({
      id: new Date().getTime(),
      content: value,
      completed: false
    })

    currentInput.current!.value = ''
  }

  return (
    <>
      <input 
        type="text" 
        placeholder='输入事项'
        ref={ currentInput }
      />
      <button onClick={ onAddTodo }>添加</button>
    </>
  )
}

export default TDInput