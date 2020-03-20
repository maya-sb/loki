<template>

  <div class="pt-3 grey lighten-4">
    <span class="subheading grey--text ml-4">Usuários</span>

    <v-container class="mt-4 grey lighten-4" grid-list-lg>
      
      <v-layout row justify-center align-center>
      <v-flex xs12 sm10 md8 lg6>
        <v-layout column>
          <v-flex v-for="doc in users" :key="doc.id">

            <v-card style="border-radius: 10px;" hover @click.stop="openDialog(doc.id, doc.nome)">
              <v-card-title primary-title align-center>
                <span class="title"> {{ doc.nome }} </span>
              </v-card-title>
            </v-card>

          </v-flex>
        </v-layout>
      </v-flex>
      </v-layout>

    </v-container>

    <v-dialog
      v-model="dialog"
      width="500"
    >

      <v-card>
        <v-card-title
          class="headline lighten-2"
          primary-title
        >
        <span>{{nome}}</span>
        </v-card-title>

        <v-card-text>
          <v-layout column>
            
            <v-layout row v-for="doc in documents" :key="doc.timestamp" justify-space-between align-center class="pa-2">
              <span class="title indigo--text">{{convert(doc.timestamp)}}</span>
              <span class="subtitle-1 font-weight-bold error--text" v-if="doc.atrasado">Atrasado</span>
              <span class="subtitle-1 font-weight-bold success--text" v-else>Na hora</span>
            </v-layout>

          </v-layout>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="indigo"
            text
            @click="dialog = false"
          >
            Fechar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

  </div>

</template>

<script>
import db from '@/firebase/index';

export default {

  data() {
    return {
      drawer: true,
      users: [],
      dialog: false,
      documents: [],
      nome: '',
    };
  },


  created() {

    let ref2 = db.ref('users');
    ref2.on("value", (snapshot) => {
      this.users = snapshot.val();
      console.log(this.users[0].id)
    })
  },

  methods: {
    openDialog (id, nome) {
      this.nome = nome;

      let ref = db.ref('pontos');
      ref.orderByChild("id").equalTo(id).on("value", (snapshot) => {
        this.documents = snapshot.val();
        this.dialog = true;

        // aqui
        let ordered = {};
        let compareFunction = (a, b) => {
          return this.documents[b]["timestamp"] - this.documents[a]["timestamp"];
        };

        // if asc
        //compareFunction = (a, b) => {
        //  return this.documents[a]["timestamp"] - this.documents[b]["timestamp"];
        //}
        
        Object.keys(this.documents).sort(compareFunction).forEach((key) => {
          ordered[key] = this.documents[key];
        });

        this.documents = ordered;
        console.log(ordered); 
      })
    },

    convert(unix){

    // Unixtimestamp
    var unixtimestamp = unix;

    // Months array
    var months_arr = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

    // Convert timestamp to milliseconds
    var date = new Date(unixtimestamp*1000);

    // Year
    var year = date.getFullYear();

    // Month
    var month = months_arr[date.getMonth()];

    // Day
    var day = date.getDate();

    // Hours
    var hours = date.getHours();

    // Minutes
    var minutes = "0" + date.getMinutes();

    // Seconds
    var seconds = "0" + date.getSeconds();

    // Display date time in MM-dd-yyyy h:m:s format
    var convdataTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2) + " no dia " + day + " " + month + " "+year;
    
    return convdataTime;
    
    }
  }

}
</script>