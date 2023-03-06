<template>
  <div>
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <v-card class="card">
            <v-card-title class="mt-10 d-flex justify-center card-text-color">
              <h1>Finance</h1>
              <v-btn class="ms-5 color-finance" @click="logout()">Logout</v-btn>
            </v-card-title>
            <v-card-text class="d-flex justify-center">
              <v-tabs center-active>
                <v-tab class="color-finance" @click="openDialog()">Depositar</v-tab>
                <v-tab class="color-finance">Pagar</v-tab>
                <v-tab class="color-finance">Transferir</v-tab>
                <v-tab class="color-finance">Cobrar</v-tab>
              </v-tabs>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-container>
        <v-row>
          <v-col class="d-flex justify-center card-finance" cols="12">
            <v-card width="1000">
              <div class="d-flex justify-space-around mt-3 mb-3">
                <v-card-title>
                  <h4 class="color-finance">Conta</h4>
                  <h5>
                    <b>R$ {{ entradas }}</b>
                  </h5>
                </v-card-title>
                <!-- <v-card-title>
                  <h4 class="color-finance">Saida</h4>
                  <h5>
                    <b>R${{ saidas }}</b>
                  </h5>
                </v-card-title>
                <v-card-title>
                  <h4 class="color-finance">Total</h4>
                  <h5>
                    <b>R$ {{ total }}</b>
                  </h5>
                </v-card-title> -->
              </div>
            </v-card>
          </v-col>
        </v-row>
        <v-row class="mt-3">
          <v-col class="d-flex card-z-index justify-center" cols="12">
            <v-card class="d-flex" width="1000">
              <v-col cols="12" md="3">
                <h4 class="color-finance">Descrição</h4>
                <v-text-field
                  v-model="contas.title"
                  density="compact"
                  label="Descrição"
                  variant="solo"
                ></v-text-field>
              </v-col>
              <v-col class="color-finance" cols="12" md="3">
                <h4>Valor</h4>
                <v-text-field
                  v-model="contas.value"
                  density="compact"
                  label="Value"
                  variant="solo"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="3">
                <h4 class="color-finance">Tipo</h4>
                <v-autocomplete
                  v-model="contas.category"
                  density="compact"
                  label="Tipo"
                  variant="solo"
                  :items="['Saida', 'Entrada']"
                ></v-autocomplete>
              </v-col>
              <v-col class="d-flex align-center" cols="12" md="3">
                <v-btn @click="addFinance()" class="color-finance"
                  >Adicionar</v-btn
                >
              </v-col>
            </v-card>
          </v-col>
        </v-row>
        <v-row class="mt-3">
          <v-col class="d-flex card-z-index justify-center" cols="12">
            <v-card width="1000">
              <div class="d-flex">
                <v-col cols="12" md="3">
                  <h4 class="color-finance">Descrição</h4>
                </v-col>
                <v-col cols="12" md="3">
                  <h4 class="color-finance">Valor</h4>
                </v-col>
                <v-col offset="1" cols="12" md="3">
                  <h4 class="color-finance">Tipo</h4>
                </v-col>
              </div>
              <div
                v-for="(finance, index) in finances"
                :key="index"
                class="d-flex"
              >
                <v-col cols="12" md="3">
                  {{ finance.title }}
                </v-col>
                <v-col cols="12" md="3">
                  <h4>R$: {{ finance.value }}</h4>
                </v-col>
                <v-col offset="1" cols="12" md="3">
                  <h4>{{ finance.category }}</h4>
                </v-col>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <v-row>
        <v-col cols="12">
          <v-card class="card card-footer">
            <v-card-title class="mt-10 d-flex justify-center card-text-color">
            </v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- Dialog finance -->
    <v-dialog
    width="330"
      v-model="dialog"
    >
      <v-card>
        <v-card-title>Qual valor você deseja <br> depositar</v-card-title>
       <v-text-field
          label="Valor do deposito"
          model-value="0.00"
          prefix="R$"
        ></v-text-field>
        <v-card-actions>
          <v-btn color="primary" block @click="dialog = false">Close Dialog</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      deposit: 0,

      receitas: 0,
      entradas: 0,
      total: 0,
      saidas: 0,
      contas: {
        category: "",
        title: "",
        value: "",
      },
      finances: [],
    };
  },
  mounted() {
    const data = localStorage.getItem("finance");
    const finance = JSON.parse(data);
    if (finance) {
      this.finances = finance;
      finance.forEach((items) => {
        if (items.category == "Entrada") {
          this.entradas = this.entradas + parseFloat(items.value);
        }
        if (items.category == "Saida") {
          this.saidas = this.saidas + parseFloat(items.value);
        }
      });
    } else {
      this.finances = [];
    }
    this.total = this.entradas - this.saidas;
  },
  methods: {
    addFinance() {
      this.finances.push(this.contas);
      console.log(this.finances);
      this.contas = { category: "", title: "", value: "" };
      localStorage.setItem("finance", JSON.stringify(this.finances));

      this.entradas = 0;
      this.saidas = 0;
      this.total = 0;
      this.finances.forEach((items) => {
        if (items.category == "Entrada") {
          this.entradas = this.entradas + parseFloat(items.value);
        }
        if (items.category == "Saida") {
          this.saidas = this.saidas + parseFloat(items.value);
        }
      });
      this.total = this.entradas - this.saidas;
    },
    result() {
      let result = JSON.parse(localStorage.getItem("finance"));
      this.finances = result;
      finance.forEach((items) => {
        if (items.category == "Entrada") {
          this.entradas = this.entradas + parseFloat(items.value);
        }
        if (items.category == "Saida") {
          this.saidas = this.saidas + parseFloat(items.value);
        }
      });
      this.total = this.entradas - this.saidas;
    },
    logout() {
      localStorage.removeItem("email");
      localStorage.removeItem("senha");
      this.$router.push({
        name: "login",
      });
      return alert("Usuario Deslogado");
    },
    openDialog(){
      this.dialog = true
    }
  },
};
</script>

<style>
.card {
  background-color: #d9ceb2;
  height: 180px;
}
.card-footer {
  background-color: #d9ceb2;
  margin-top: -99px;
}
.card-text-color {
  color: white;
}
.card-finance {
  margin-top: -65px;
}
.card-z-index {
  z-index: 1;
}
.color-finance {
  color: #7a6a53;
}
</style>