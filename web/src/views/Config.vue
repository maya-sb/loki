<template>

  <div class="pt-3">
    <span class="subheading grey--text ml-4">Configurações</span>

    <v-container class="mt-4 grey lighten-4" grid-list-lg>
      
      <v-layout row justify-center>
        <h1 class="indigo--text">{{horasSalva}}:{{minutosSalvos}}</h1>
      </v-layout>


      <v-layout row justify-center>
        <h2>Horário do ponto</h2>
      </v-layout>

      
      <v-layout row wrap justify-center>
        <v-flex xs2>
            <v-text-field
              dense
              label="Horas"
              single-line
              outlined
              v-model="horas"
            ></v-text-field>
          </v-flex>
        <v-flex xs2>
            <v-text-field
              dense
              label="Minutos"
              single-line
              outlined
              v-model="minutos"
            ></v-text-field>
          </v-flex>
          <v-flex xs2>
            <v-btn color="indigo white--text" @click="definir()">Alterar</v-btn>
          </v-flex>
      </v-layout>

    </v-container>

  </div>

</template>

<script>
import db from '@/firebase/index';

export default {

  data() {
    return {
      horas: '',
      minutos: '',
      horasSalva: '',
      minutosSalvos: '',
    };
  },


  created() {
    db.ref('/horas').on("value", (snapshot) => {
      this.horasSalva = snapshot.val();
    })
    db.ref('/minutos').on("value", (snapshot) => {
      this.minutosSalvos = snapshot.val();
    })
  },

  methods: {
    definir() {
      db.ref().child("horas").set(this.horas);
      db.ref().child("minutos").set(this.minutos);
      this.horas = '';
      this.minutos = '';
    }
  }

}
</script>