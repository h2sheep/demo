<template>

  <div class="list-item">
    
    <label class="content">
      <input
        class="checkbox"
        type="checkbox"
        :checked="item.status === DONE"
        @click="setStatus(item.id)"
      >
      
      <span 
        :class="{'done': item.status === DONE}"
      >{{ item.content }}</span>
    </label>
    
    <span 
      class="remove-btn"
      @click="removeItem(item.id)"
    >删除</span>
    
    <!-- 未完成就显示状态-->
    <span
      v-if="item.status !== DONE"
      :class="{
        'doing': item.status === DOING,
        'willdo': item.status === WILLDO
      }"
      @click="setDoing(item.id)"
    >{{ item.status === WILLDO ? '去完成' : '完成中...' }}</span>
    
  </div>
  
</template>


<script lang="ts">
  import { defineComponent, PropType } from 'vue'
  
  import { ITodoItem, TODO_STATUS } from '@/common/types/TodoList'
  
  interface IItemStatus {
    DOING: TODO_STATUS,
    WILLDO: TODO_STATUS,
    DONE: TODO_STATUS
  }
  
  export default defineComponent({
    props: {
      item: Object as PropType<ITodoItem>
    },
    setup(props, { emit }) {
      
      const itemStatus: IItemStatus = {
        DOING: TODO_STATUS.DOING,
        WILLDO: TODO_STATUS.WILLDO,
        DONE: TODO_STATUS.DONE
      }
      
      const setStatus = (id: number): void => {
        emit('setStatus', id)
      }
      
      const removeItem = (id: number): void => {
        emit('removeItem', id)
      }
      
      const setDoing = (id: number): void => {
        emit('setDoing', id)
      }
      
      return {
        ...itemStatus,
        setStatus,
        removeItem,
        setDoing
      }
    }
  })
</script>

<style scoped lang='less'>

  .list-item {
    width: 100%;
    display: flex;
    align-items: center;
    margin: 10px 0;
    font-size: 12px;
    color: #666;
    cursor: default;
    
    .content {
      display: flex;
      align-items: center;
      color: #000;
      
      .checkbox { margin-right: 5px; }
      
      .done {
        text-decoration: line-through;
        color: #999;
      }
    }
    
    .remove-btn {
      margin: 0 10px;
      
      &:hover { color: #aa4c6a; }
    }
    
    .doing {
      font-weight: bold;
      color: #FF5777;
    }
  }
</style>