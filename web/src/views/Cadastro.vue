<template>

  <div class="pt-3">
    <span class="subheading grey--text ml-4">Gerenciar usuários</span>

    <v-container class="mt-4 grey lighten-4" grid-list-lg>
      
      <v-layout row justify-center align-center>
        <h2>Adicionar novo usuário</h2>
      </v-layout>

      <v-layout row wrap justify-center>
          <v-flex xs2>
            <v-text-field
              dense
              label="ID"
              single-line
              outlined
              v-model="id"
            ></v-text-field>
          </v-flex>

          <v-flex xs6>
            <v-text-field
            dense
              label="Nome"
              single-line
              outlined
              v-model="nome"
            ></v-text-field>
          </v-flex>
          <v-flex xs3>
            <v-btn color="indigo white--text" @click="adicionar()">Adicionar</v-btn>
          </v-flex>
      </v-layout>

      <v-layout row justify-center align-center>
        <h2>Remover usuário</h2>
      </v-layout>

      <v-layout row wrap justify-center>
        <v-flex xs2>
            <v-text-field
              dense
              label="ID"
              single-line
              outlined
              v-model="idToDel"
            ></v-text-field>
          </v-flex>
          <v-flex xs2>
            <v-btn color="indigo white--text" @click="deletar()">Remover</v-btn>
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
      id: '',
      idToDel: '',
      nome: '',
      paraComparar: '',
    };
  },


  created() {
    
  
  },

  methods: {
    deletar() {
      db.ref("/users").child(this.idToDel).remove();
    },

    adicionar() {
      db.ref('/compare').on("value", (snapshot) => {
        this.paraComparar = !snapshot.val();
        console.log("aaa", !snapshot.val());
        if(this.paraComparar) {
          this.paraComparar = 1;
        } else {
          this.paraComparar = 0;
        }
        console.log(this.paraComparar)
      })
      db.ref("/users/"+this.id).set({
        'id': this.id,
        'nome': this.nome,
        'paraComparar': this.paraComparar,
      });
      db.ref().child("cadastrar").set(Number(this.id));
    }
  }

}
</script>