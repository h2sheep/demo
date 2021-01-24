<template>
  <input 
    type="text"
    v-model="content"
    @keyup="addTodoItem"
  >
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue'
  
  import { useTodoList, IUseTodoList } from '@/common/hooks/TodoList'
  
  export default defineComponent({
    setup() {
      const content = ref<string>('')
      
      // 解构
      const { setTodoItem }: IUseTodoList  = useTodoList()
      
      const addTodoItem = (e: KeyboardEvent): void => {
        // 如果按下回车 且有值时 才设置数据 
        if (e.keyCode === 13 && content.value.trim().length) {
          // 设置数据
          setTodoItem(content.value)
          // 清空输入框
          content.value = ''
        }
      }
      
      return {
        content,
        addTodoItem
      }
    }
  })
</script>

<style scoped lang='less'>

</style>
