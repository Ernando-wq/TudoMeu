<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-tile class="d-flex justify-center"><h1>List</h1></v-card-tile>
          <v-card-text>
            <v-text-field v-model="name" label="Nome:"></v-text-field>
            <v-text-field
              v-model="age"
              label="Idade:"
              type="number"
            ></v-text-field>
            <!-- <input v-model="name" type="text" placeholder="Nome" /> -->
            <v-btn @click="addcolum()" color="primary" class="mb-5"
              ><v-icon>mdi-plus</v-icon></v-btn
            >
            <v-row v-for="(observation, i) in observations" :key="i">
              <v-col cols="6" md="6">
                <v-text-field
                  v-model="observation.key"
                  label="Chave:"
                ></v-text-field>
              </v-col>
              <v-col cols="6" md="6">
                <v-text-field
                  v-model="observation.value"
                  label="Valor:"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-card-text>
          <div class="d-flex ms-4"></div>
          <div class="d-flex justify-center">
            <v-btn @click="sendInfo()" color="primary">Enviar </v-btn>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState} from "vuex";
export default {
  // computed: {
  //       ...mapState({
  //         name: state => state.name,
  //         age: state => state.age,
  //         observations: state => state.observations
  //       })
  data() {
    return {
      name: "",
      age: "",
      observations: [{ key: null, value: null }],
    };
  },
  methods: {
    // Adicionando varias colunas
    addcolum() {
      this.observations.push({ key: null, value: null });
    },

    // Passando informação para pagina resumo
    sendInfo() {
      this.$router.push({
        name: "resumo",
        params: {
          name: this.name,
          age: this.age,
        },
        query: { obs: JSON.stringify(this.observations) },
      });
    },
  },
};
</script>

