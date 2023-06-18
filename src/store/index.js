import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [],
  },
  mutations: {
    setTasks(state, tasks) {
      state.tasks = tasks;
    },
    addTask(state, task) {
      state.tasks.push(task);
    },
    deleteTask(state, taskId) {
      state.tasks = state.tasks.filter(task => task.id !== taskId);
    },
    updateTask(state, updatedTask) {
      const index = state.tasks.findIndex(task => task.id === updatedTask.id);
      if (index !== -1) {
        Vue.set(state.tasks, index, updatedTask);
      }
    },
  },
  actions: {
    async fetchTasks({ commit }) {
      const response = await fetch('https://testovoe-671f5-default-rtdb.firebaseio.com/tasks.json');
      const data = await response.json();
      if (data) {
        const tasks = Object.keys(data).map(id => ({ id, ...data[id] }));
        commit('setTasks', tasks);
      } else {
        commit('setTasks', []);
      }
    },
    async createTask({ commit }, taskData) {
      const response = await fetch('https://testovoe-671f5-default-rtdb.firebaseio.com/tasks.json', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(taskData),
      });
      const data = await response.json();
      commit('addTask', { id: data.name, ...taskData });
    },
    async deleteTask({ commit }, taskId) {
      await fetch(`https://testovoe-671f5-default-rtdb.firebaseio.com/tasks/${taskId}.json`, {
        method: 'DELETE',
      });
      commit('deleteTask', taskId);
    },
    async updateTask({ commit }, updatedTask) {
      await fetch(`https://testovoe-671f5-default-rtdb.firebaseio.com/tasks/${updatedTask.id}.json`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedTask),
      });
      commit('updateTask', updatedTask);
    },
  },
  getters: {
    getTaskById: state => id => state.tasks.find(task => task.id === id),
  },
});
