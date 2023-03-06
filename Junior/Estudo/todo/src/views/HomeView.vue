<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="d-flex justify-center">
        <v-card>
          <v-card-title class="d-flex justify-center">Contador</v-card-title>
          <v-card-text class="d-flex justify-center"
            ><h3>Numero:{{ number }} </h3></v-card-text
          >
          <v-card-actions>
            <v-btn @click="adicionar()" color="purple">Adicionar</v-btn>
            <v-btn @click="addNewValue()" color="purple" class="ms-2">Novo Valor</v-btn>
            <v-btn @click="goToReset()" color="primary" to="reset">Proxima Pagina</v-btn>
            <!-- <router-link -->
             <!-- :to="{ name: 'reset', params: { test: '1' } }" -->
             <!-- > -->
            <!-- </router-link> -->
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  computed: {
    ...mapState({
        number: state => state.number
    })
  },
  methods: {
    ...mapMutations([
      'adicionar',
      'remove',
      'reset',
    ]),
    addNewValue(){
      this.number = this.number + parseFloat(prompt('Adicionar valor'))
    },
    goToReset(){
      this.$router.push({
        name: 'reset',
        params: {
          number: this.number
        }
      })
    }
  },
};
</script>
