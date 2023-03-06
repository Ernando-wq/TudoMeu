<template>
  <v-container class="background mt-10">
    <v-row>
      <v-col
        cols="12"
        md="12"
        class="d-flex justify-space-between align-center"
      >
        <h3 class="ms-2">Agenda Telefonica</h3>
        <div>
          <v-btn variant="float">Group by</v-btn>
          <v-btn variant="float">Three months</v-btn>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="8">
        <v-btn size="small" variant="plain">Agenda</v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="list in lists" :key="list" cols="12" md="6">
        <v-card width="250">
          <v-card-title class="d-flex justify-center"
            >Lista Telefonica</v-card-title
          >
          <v-card-text>
            <v-text-field
              v-model="first"
              color="primary"
              variant="underlined"
            >{{list.nome}}</v-text-field>

            <v-text-field
              v-model="last"
              color="primary"
              variant="underlined"
            >{{list.telefone}}</v-text-field>

            <v-text-field
              v-model="email"
              color="primary"
              variant="underlined"
            >{{list.email}}</v-text-field>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      categoria: null,
      lists: [
        {
          nome: "Chico",
          email: "Chico.tripa@gmail.com",
          telefone: "8599999999",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style>
.background {
  background-color: rgba(0, 255, 255, 0.134);
  border-top-right-radius: 26px;
  border-top-left-radius: 26px;
  width: 50%;
}
</style>