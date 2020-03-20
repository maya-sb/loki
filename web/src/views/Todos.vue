<template>

  <div class="pt-3">
    <span class="subheading grey--text ml-4">Todos os registros</span>

    <v-container class="mt-4 grey lighten-4" grid-list-lg>
      

      <v-layout row justify-center align-center>
      <v-flex xs12 sm10 md8 lg6>

        <v-layout row wrap>
          <v-flex xs3>
            <v-text-field
              label="Dia"
              single-line
              dense
              outlined
              v-model="dia"
            ></v-text-field>
          </v-flex>

          <v-flex xs3>
            <v-text-field
              label="Mês"
              single-line
              dense
              outlined
              v-model="mes"
            ></v-text-field>
          </v-flex>

          <v-flex xs3>
            <v-text-field
              label="Ano"
              single-line
              outlined
              dense
              v-model="ano"
            ></v-text-field>
          </v-flex>

          <v-flex xs3>
            <v-btn color="indigo white--text" @click="filtrar">Filtrar</v-btn>
          </v-flex>
          
        </v-layout>

        <v-layout column>
          <v-flex v-for="doc in documents" :key="doc.timestamp">

            <v-card style="border-radius: 10px;" hover>
              <v-card-title primary-title align-center>
                <v-layout row wrap justify-space-between align-center>
                  <span class="subtitle-1" v-if="breakpoint"> {{ doc.nome }} </span>
                  <span class="title" v-else> {{ doc.nome }} </span>
                  <span class="subtitle-1 font-weight-bold indigo--text">{{convert(doc.timestamp)}}</span> 
                  <span class="subtitle-1 font-weight-bold error--text" v-if="doc.atrasado">Atrasado</span> 
                  <span class="subtitle-1 font-weight-bold success--text" v-else>Na hora</span> 
                </v-layout>
              </v-card-title>
            </v-card>

          </v-flex>
        </v-layout>
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
      drawer: true,
      documents: [],
      users: [],
      dia: '',
      mes: '',
      ano: '',
    };
  },


  created() {
    let ref = db.ref('pontos');
    ref.on("value", (snapshot) => {
      this.documents = snapshot.val();
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
    })

  },

  methods: {

    filtrar() {
      let date1 = Date.parse(this.ano + "-" + this.mes + "-" + this.dia + " 00:00:00")
      date1 = date1.toString().slice(0, -3);
      date1 = Number(date1)

      let date2 = Date.parse(this.ano + "-" + this.mes + "-" + this.dia + " 20:59:59")
      date2 = date2.toString().slice(0, -3);
      date2 = Number(date2)
      
      let ref = db.ref('pontos').orderByChild("timestamp").startAt(date1).endAt(date2);
      ref.on("value", (snapshot) => {
        this.documents = snapshot.val();
        // aqui
        let ordered = {};
        let compareFunction = (a, b) => {
          return this.documents[b]["timestamp"] - this.documents[a]["timestamp"];
        };

        // if asc
        compareFunction = (a, b) => {
          return this.documents[a]["timestamp"] - this.documents[b]["timestamp"];
        }
        
        Object.keys(this.documents).sort(compareFunction).forEach((key) => {
          ordered[key] = this.documents[key];
        });

        this.documents = ordered;
     })


    },


    convert(unix){

    // Unixtimestamp
    var unixtimestamp = unix;

    // Convert timestamp to milliseconds
    var date = new Date(unixtimestamp*1000);

    // Year
    var year = date.getFullYear();

    // Month
    var month = date.getMonth() + 1;
    if(month < 10) {
      month = "0" + month;
    }

    // Day
    var day = date.getDate();

    // Hours
    var hours = date.getHours();

    // Minutes
    var minutes = "0" + date.getMinutes();

    // Seconds
    var seconds = "0" + date.getSeconds();

    // Display date time in MM-dd-yyyy h:m:s format
    var convdataTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2) + " em " + day + "/" + month + "/"+year;
    
    return convdataTime;
    
    }
  },

  computed: {
    breakpoint() {
      if (this.$vuetify.breakpoint.name === 'xs') {
        return true;
      }
      return false;
    },
  },
}
</script>