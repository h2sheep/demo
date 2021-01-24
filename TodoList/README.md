# todolist v3 + ts


### todolist

* 所有具体功能实现都在自定义的hooks中完成
* 数据存储在localstorage中，避免刷新重置


#### todolist item

* 有三种状态
  * doing 完成中
  * willdo 去完成
  * done 已完成
* 监听事件切换状态
  * doing -> willdo
  * willdo -> doing
  * doing, willdo -> done
  * done -> willdo

#### dodolist input

* 监听按下回车事件
  * 更新存储的值
  * 情况输入框

#### 事件流程
  
* 事件触发 
  * actionType 管理： 不维护字符串
  * dispath -> actions
  * commit -> mutations
  * state 更新
* watch todolist
  * state中list更新
  * 给localstorage重新赋值

**无论同步还是异步，还是按照完整的事件流程来编写代码**