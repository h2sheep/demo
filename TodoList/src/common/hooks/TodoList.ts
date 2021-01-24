
import { ITodoItem, TODO_STATUS } from '@/common/types/TodoList'

import { 
  ADD_LIST_ITEM,
  SET_TODO_LIST,
  REMOVE_LIST_ITEM,
  SET_ITEM_STATUS,
  SET_DOING_STATUS
} from '@/store/actionType'

import { uselocalStorage, IuselocalStorage } from './localstorage'

import { Store, useStore } from 'vuex'
import { watch } from 'vue'

export interface IUseTodoList {
  setTodoItem: (value: string) => void
  setTodoList: () => void
  setStatus: (id: number) => void
  removeItem: (id: number) => void
  setDoing: (id: number) => void
}

export const useTodoList = (): IUseTodoList => {
  
  // 引入 store
  const store: Store<any> = useStore()
  
  // 缓存
  const { getLocalList, setLocalList }: IuselocalStorage = uselocalStorage()
  
  // 获取存储的列表
  const todoList: ITodoItem[] = getLocalList()
  
  // 生成一条item
  const setTodoItem = (value: string): void => {
    const item: ITodoItem = {
      id: new Date().getTime(),
      content: value,
      status: TODO_STATUS.WILLDO
    }
    // 派发事件
    store.dispatch(ADD_LIST_ITEM, item)
  }
  
  // 取出缓存中的值 保存到vuex中
  const setTodoList = (): void => {
    store.dispatch(SET_TODO_LIST, todoList)
  }
  
  // 勾选框切换状态
  const setStatus = (id: number): void => {
    store.dispatch(SET_ITEM_STATUS, id)
  }
  
  // 删除指定item
  const removeItem = (id: number): void => {
    store.dispatch(REMOVE_LIST_ITEM, id)
  }
  
  // 点击去完成切换状态
  const setDoing = (id: number): void => {
    store.dispatch(SET_DOING_STATUS, id)
  }
  
  // list 更新 更新缓存
  watch(() => store.state.list, (newList: ITodoItem[]): void => {
    setLocalList(newList)
  })
  
  
  return {
    setTodoItem,
    setTodoList,
    setStatus,
    removeItem,
    setDoing
  }
}