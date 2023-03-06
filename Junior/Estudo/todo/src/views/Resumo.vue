<template>
  <v-contain>
    <v-row>
      <v-col class="d-flex justify-center" cols="12">
        <v-card width="70%">
          <v-card-title class="d-flex justify-center"
            ><h1>Resumo</h1></v-card-title
          >
          <div class="mt-5">
            <v-text-field label="Nome:" v-model="name" readonly> </v-text-field>
            <v-text-field label="idade" v-model="age" readonly> </v-text-field>
            <h3>Observações</h3>
            <v-list lines="one">
              <v-list-item
                v-for="(observation, i) in observations"
                :key="i"
                :title="observation.key"
                :subtitle="observation.value"
              ></v-list-item>
            </v-list>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-contain>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      age: "",
      observations: [],
    };
  },
  mounted() {
    this.name = this.$route.params.name;
    this.age = this.$route.params.age;
    this.observations = JSON.parse(this.$route.query.obs);
    console.log(this.observations);
  },
};
</script>