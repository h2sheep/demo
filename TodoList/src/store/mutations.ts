import {
  ADD_LIST_ITEM,
  SET_TODO_LIST,
  REMOVE_LIST_ITEM,
  SET_ITEM_STATUS,
  SET_DOING_STATUS
} from './actionType'

import { ITodoList, ITodoItem, TODO_STATUS } from '@/common/types/TodoList'

export default {
  [ADD_LIST_ITEM](state: ITodoList, item: ITodoItem): void {
    // 要监听list 就应该赋新值
    // state.list.unshift(item)
    state.list = [item, ...state.list]
  },
  [SET_TODO_LIST](state: ITodoList, list: ITodoItem[]):void {
    state.list = list
  },
  [REMOVE_LIST_ITEM](state: ITodoList, id: number):void {
    // 筛选出不等于id的item
    state.list = state.list.filter((item: ITodoItem)  => item.id !== id)
  },
  [SET_ITEM_STATUS](state: ITodoList, id: number): void {
    state.list = state.list.map((item: ITodoItem) => {
      if (item.id === id) {
        switch (item.status) {
          // 如果已经完成了 切换为去完成
          case TODO_STATUS.DONE:
            item.status = TODO_STATUS.WILLDO
            break
          // 如果为完成 切换为已完成
          case TODO_STATUS.WILLDO:
          case TODO_STATUS.DOING:
            item.status = TODO_STATUS.DONE
            break
        }
      }
      return item
    })
  },
  [SET_DOING_STATUS](state: ITodoList, id: number): void {
    state.list = state.list.map((item: ITodoItem) => {
      if (item.id === id) {
        // 去完成 -> 完成中，完成中 -> 去完成
        item.status === TODO_STATUS.DOING 
        ? item.status = TODO_STATUS.WILLDO
        : item.status = TODO_STATUS.DOING
      } else {
        // 其他未完成的item切换为去完成状态
        if (item.status === TODO_STATUS.DOING) item.status = TODO_STATUS.WILLDO
      }
      
      return item
    })
  }
}