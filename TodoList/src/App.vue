<template>
  
  <todo-list :todoList="todoList"/>
  
</template>

<script lang="ts">
  
  import { defineComponent, onMounted, computed } from 'vue'
  import { Store, useStore } from 'vuex'
  
  import TodoList from '@/components/todo-list/TodoList.vue'
  
  import { useTodoList, IUseTodoList } from './common/hooks/TodoList'
  
  export default defineComponent({
    components: {
      TodoList
    },
    setup() {
      const store: Store<any> = useStore()
      
      // 获取列表
      const { setTodoList }: IUseTodoList = useTodoList()
      
      // 页面挂载完毕后保存列表
      onMounted(() => {
        setTodoList()
      })
      
      return {
        todoList: computed(() => store.state.list)
      }
    }
  })
  
</script>

<style scoped lang='less'>

</style>

