<template>
  
  <!-- 输入框-->
  <todo-list-input />
  
  <!-- 列表 -->
  <todo-list-item 
    v-for="item in todoList" :key="item.id"
    :item="item"
    @setStatus="setStatus"
    @removeItem="removeItem"
    @setDoing="setDoing"
  />
  
</template>

<script lang="ts">
  import { defineComponent, PropType } from 'vue'
  
  import { ITodoItem } from '@/common/types/TodoList'
  
  import { useTodoList, IUseTodoList } from '@/common/hooks/TodoList'
  
  import TodoListInput from './TodoListInput.vue'
  import TodoListItem from './TodoListItem.vue'
  
  export default defineComponent({
    components: {
      TodoListInput,
      TodoListItem
    },
    props: {
      todoList: Array as PropType<ITodoItem[]>
    },
    setup(props) {
      const {
        setStatus,
        removeItem,
        setDoing
      }: IUseTodoList = useTodoList()
      
      return {
        setStatus,
        removeItem,
        setDoing
      }
    }
  })
</script>

<style scoped lang='less'>

</style>
