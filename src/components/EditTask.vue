<template>
  <section class="edit-task">
    <h2>Редактировать Task</h2>
    <form @submit.prevent="updateTask">
      <div>
        <input id="title" v-model="task.title" required placeholder="Заголовок"/>
      </div>
      <div>
        <textarea id="description" v-model="task.description" placeholder="Описание"></textarea>
      </div>
      <app-button>Сохранить</app-button>
    </form>
  </section>
</template>

<script>
import AppButton from './AppButton.vue';
  export default {
    components:{AppButton},
    name: 'EditTask',
    data() {
      return {
        task: null,
      };
    },
    computed: {
      taskId() {
        return this.$route.params.id;
      },
    },
    methods: {
      async updateTask() {
        await this.$store.dispatch('updateTask', this.task);
        this.$router.push('/tasks');
      },
    },
    created() {
      const task = this.$store.getters.getTaskById(this.taskId);
      if (task) {
        this.task = { ...task };
      } else {
        this.$router.push('/');
      }
    },
  };
</script>
<style scoped>
form div{
  margin-bottom: 10px;
}
input, textarea{
  font-size: 18px;
}
button{
  background: #3c637e;
  color:#fff;
  padding: 8px 10px;
  font-size:18px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
button:hover{
  background:#5a9ccc ;
}
</style>