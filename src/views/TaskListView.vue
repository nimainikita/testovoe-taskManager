<template>
  <div class="tasks-page">
    <create-task />
    <task-list />
  </div>
</template>
<script>
import TaskList from "@/components/TaskList.vue";
import CreateTask from '@/components/CreateTask.vue';

export default {
  components:{TaskList, CreateTask}
}
</script>
<style scoped>
.tasks-page{
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
}
</style>

