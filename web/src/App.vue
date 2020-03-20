<template>
  <v-app>

    <!-- Drawer -->
  <v-navigation-drawer
    v-model="drawer"
    color="indigo"
    height="100%"
    app
    dark
    class="pt-2"
  >
    <v-list
      nav
      class="py-0 transparent"
    >

      <v-list-item
        link
        router to="/geral"
      >
        <v-list-item-content>
          <v-list-item-title class="title">Geral</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item
        link
        router to="/users"
      >
        <v-list-item-content>
          <v-list-item-title class="title">Usuários</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item
        link
        router to="/cadastro"
      >
        <v-list-item-content>
          <v-list-item-title class="title">Gerenciar Usuários</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item
        link
        router to="/config"
      >
        <v-list-item-content>
          <v-list-item-title class="title">Configurações</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

    </v-list>
  </v-navigation-drawer>

  <v-content class="pt-5 grey lighten-4">
    <div class="ml-2">
      <v-btn icon color="indigo" @click="drawer = !drawer">
        <v-icon large>mdi-menu</v-icon>
      </v-btn>
    </div>
    
    <router-view></router-view>
  </v-content>

  </v-app>
</template>

<script>

import db from '@/firebase/index';

export default {
  name: 'App',

  components: {
    
  },

  data() {
    return {
      drawer: true,
    };
  },

  created() {
    let ref = db.ref('users');
    ref.on("value", (snapshot) => {
      console.log(snapshot.val());
    })
  }

};
</script>

<style>
  .v-badge__badge {
    width: 10px;
    height: 10px;
  }
  .v-badge--overlap .v-badge__badge {
    top: -2px;
    right: -4px;
  }
</style>
