<template>
  <section class="create-task">
    <h2>Создание задачи</h2>
    <form @submit.prevent="createTask">
      <div>
        <input id="title" v-model="title" required placeholder="Заголовок"/>
      </div>
      <div>
        <textarea id="description" v-model="description" placeholder="Описание"></textarea>
      </div>
      <app-button>Создать</app-button>
    </form>
  </section>
</template>

<script>
import AppButton from './AppButton.vue';
  export default {
    components:{AppButton},
    name: 'CreateTask',
    data() {
      return {
        title: '',
        description: '',
      };
    },
    methods: {
      async createTask() {
        const taskData = {
          title: this.title,
          description: this.description,
        };
        await this.$store.dispatch('createTask', taskData);
        this.title = '';
        this.description = '';
      },
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


</style>