<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="d-flex justify-center">
        <v-card>
          <v-card-tile class="d-flex justify-center">
            <h2>Contador</h2>
          </v-card-tile>
          <v-card-text class="d-flex justify-center">
            <h3>Numero:{{ number }}</h3></v-card-text
          >
          <v-card-actions>
            <v-btn color="primary" to="/">Pagina inicial</v-btn>
            <v-btn color="error" class="ms-2" @click="diminuir()">Diminuir</v-btn>
            <v-btn  color="error" class="ms-2" @click="reset()">Resetar</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
    data(){
    return{
      number:""
    }
  },
  created(){
    this.number = this.$route.params.number
  },
  methods: {
    diminuir(){
      this.number--
    },
    reset(){
      this.number = 0
    }
  },
};
</script>