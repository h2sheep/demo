
import { ITodoItem } from '../types/TodoList'

export interface IuselocalStorage {
  getLocalList: () => ITodoItem[]
  setLocalList: (list: ITodoItem[]) => void
}

export const uselocalStorage = (): IuselocalStorage => {
  
  // 获取
  const getLocalList = (): ITodoItem[] => {
    return JSON.parse(localStorage.getItem('todoList') || '[]')
  }
  
  // 存储
  const setLocalList = (list: ITodoItem[]): void => {
    localStorage.setItem('todoList', JSON.stringify(list))
  }
  
  return {
    getLocalList,
    setLocalList
  }
}