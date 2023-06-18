<template>
  <section class="task-list">
    <h2>My задачи</h2>
    <div class="tasks">
      <task-item @remove="$emit('remove', post)" v-for="task in tasks" :key="task.id" :task="task" />
    </div>
  </section>
</template>

<script>
  import TaskItem from './TaskItem.vue';
  export default {
    name: 'TaskList',
    components: {
      TaskItem,
    },
    computed: {
      tasks() {
        return this.$store.state.tasks;
      },
    },
    mounted() {
      this.$store.dispatch('fetchTasks');
    },
  };
</script>