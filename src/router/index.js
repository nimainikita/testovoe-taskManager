import Vue from 'vue';
import Router from 'vue-router';
import TaskListView from '@/views/TaskListView.vue';
import CreateTask from '@/components/CreateTask.vue';
import EditTask from '@/components/EditTask.vue';
import HomeView from '@/views/HomeView.vue'
Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', name: 'Home', component: HomeView},
    { path: '/tasks', name: 'TaskList', component: TaskListView },
    { path: '/edit/:id', name: 'EditTask', component: EditTask },
  ],
  mode: 'history',
});