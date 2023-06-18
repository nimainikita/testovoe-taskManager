<template>
  <div class="task-item">
    <h3>{{ task.title }}</h3>
    <p>{{ task.description }}</p>
    <app-button @click.native="editTask">Edit</app-button>
    <app-button @click.native="deleteTask">Delete</app-button>
  </div>
</template>

<script>
import AppButton from './AppButton.vue';
  export default {
    components:{AppButton},
    name: 'TaskItem',
    props: {
      task: {
        type: Object,
        required: true,
      },
    },
    methods: {
      editTask() {
        this.$router.push(`/edit/${this.task.id}`);
      },
      deleteTask() {
        if (confirm('Are you sure you want to delete this task?')) {
          this.$store.dispatch('deleteTask', this.task.id);
        }
      },
    },
  };
</script>
<style scoped>

</style>