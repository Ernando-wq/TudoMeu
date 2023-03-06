<template>
  <v-container class="background mt-10">
    <v-row>
      <v-col
        cols="12"
        md="12"
        class="d-flex justify-space-between align-center"
      >
        <h3 class="ms-2">Task To Do</h3>
        <div>
          <v-btn variant="float">Group by</v-btn>
          <v-btn variant="float">Three months</v-btn>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="8">
        <v-btn @click="guardarCategoria('Todoo')" size="small" variant="plain"
          >Todoo</v-btn
        >
        <v-btn
          @click="guardarCategoria('In Progress')"
          size="small"
          variant="plain"
          >In Progress</v-btn
        >
        <v-btn @click="guardarCategoria('Done')" size="small" variant="plain"
          >Done</v-btn
        >
        <v-btn @click="guardarCategoria(null)" size="small" variant="plain"
          >Limpar</v-btn
        >
      </v-col>
      <!-- Dialog nova tarefa -->
      <v-col cols="12" md="4">
        <v-dialog width="600" v-model="dialog" persistent>
          <template v-slot:activator="{ props }">
            <v-btn color="primary" v-bind="props"> New Todoo </v-btn>
          </template>
          <v-card>
            <v-card-title class="d-flex justify-center">
              <span class="text-h5">New Todoo</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="12">
                    <v-select
                      label="Select"
                      item-title="name"
                      item-value="name"
                      :items="colums"
                    ></v-select>
                  </v-col>
                  <v-col cols="12">
                    <v-textarea
                      v-model="description"
                      label="Description"
                    ></v-textarea>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue-darken-1"
                variant="text"
                @click="dialog = false"
              >
                Close
              </v-btn>
              <v-btn
                color="blue-darken-1"
                variant="text"
                @click="dialog = false"
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-col>
    </v-row>
    <v-row>
      <template v-for="colum in colums" :key="colum">
        <v-col
          v-if="!categoria ? true : categoria == colum.name"
          cols="12"
          md="4"
        >
          <p class="ms-3">
            <b style="color: black">{{ colum.name }}</b>
          </p>
          <v-card v-for="card in colum.cards" :key="card" class="mt-5">
            <v-card-text>
              <p>{{ card }}</p>
            </v-card-text>
          </v-card>
        </v-col>
      </template>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      categoria: null,
      dialog: false,
      colums: [
        { name: "Todoo", cards: ["Kanban com v-for"] },

        { name: "In Progress", cards: ["Tentando entender um v-for"] },

        { name: "Done", cards: ["Adição das variaveis no test do kanban"] },
      ],
    };
  },
  methods: {
    guardarCategoria(categoria) {
      this.categoria = categoria;
    },
  },
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