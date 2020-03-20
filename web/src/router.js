import Vue from 'vue';
import Router from 'vue-router';
import Todos from './views/Todos.vue';
import Users from './views/Users.vue';
import Cadastro from './views/Cadastro.vue';
import Config from './views/Config.vue';

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [

    {
      path: '*',
      redirect: '/geral'
    },

    {
      path: '/geral',
      name: 'geral',
      component: Todos
    },
    {
      path: '/users',
      name: 'users',
      component: Users
    },
    {
      path: '/cadastro',
      name: 'cadastro',
      component: Cadastro
    },
    {
      path: '/config',
      name: 'config',
      component: Config,
    }

  ]
});

export default router;