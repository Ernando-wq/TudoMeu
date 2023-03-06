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
                <v-tab class="color-finance" @click="openDialog()"
                  >Depositar</v-tab
                >
                <v-tab class="color-finance" :to="{name: 'controlfinance'}">Controle de financias</v-tab>
                <v-tab class="color-finance">Saque</v-tab>
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
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-container>

    <!-- Dialog finance -->
    <v-dialog width="330" v-model="dialog">
      <v-card>
        <v-card-title
          >Qual valor você deseja <br />
          depositar</v-card-title
        >
        <v-text-field
          v-model="contas.value"
          label="Valor do deposito"
          prefix="R$"
        ></v-text-field>
        <v-card-actions>
          <v-btn color="primary" block @click="addFinance()"
            >Depositar</v-btn
          >
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
      
        value: "",
      },
      finances: [],
    };
  },
  mounted() {
    // this.isLoged()
    const data = localStorage.getItem("deposit");
    const finance = JSON.parse(data);
    if (finance) {
      this.finances = finance;
      finance.forEach((items) => {
        this.entradas = this.entradas + parseFloat(items.value);
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
      this.contas = { value: "" };
      localStorage.setItem("deposit", JSON.stringify(this.finances));

      this.entradas = 0;
      this.finances.forEach((items) => {
        this.entradas = this.entradas + parseFloat(items.value);
      });
     this.dialog = false
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
    openDialog() {
      this.dialog = true;
    },
  },
};
</script>

<style>
.card {
  background-color: #d9ceb2;
  height: 220px;
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