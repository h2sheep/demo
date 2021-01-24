import {
  ADD_LIST_ITEM,
  SET_TODO_LIST,
  REMOVE_LIST_ITEM,
  SET_ITEM_STATUS,
  SET_DOING_STATUS
} from './actionType'

import { ITodoList, ITodoItem } from '@/common/types/TodoList'

import { Commit } from 'vuex'

interface ICtx {
  commit: Commit
  state: ITodoList
}

export default {
  [ADD_LIST_ITEM]({ commit }: ICtx, item: ITodoItem): void {
    commit(ADD_LIST_ITEM, item)
  },
  [SET_TODO_LIST]({ commit }: ICtx, list: ITodoItem[]): void {
    commit(SET_TODO_LIST, list)
  },
  [REMOVE_LIST_ITEM]({ commit }: ICtx, id: number): void {
    commit(REMOVE_LIST_ITEM, id)
  },
  [SET_ITEM_STATUS]({ commit }: ICtx, id: number): void {
    commit(SET_ITEM_STATUS, id)
  },
  [SET_DOING_STATUS]({ commit }: ICtx, id: number): void {
    commit(SET_DOING_STATUS, id)
  }
}