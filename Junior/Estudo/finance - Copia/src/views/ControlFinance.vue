<template>
  <div>
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <v-card class="card3">
            <v-card-title class="mt-10 d-flex justify-center card-text-color">
              <h1>Finance</h1>
              <v-btn class="ms-5 color-finance" @click="logout()">Logout</v-btn>
            </v-card-title>
            <v-card-text class="d-flex justify-center">
              <v-tabs center-active>
                <v-tab class="card-text-color" :to="{ name: 'finance' }"
                  >Depositar</v-tab
                >
                <v-tab class="card-text-color" :to="{ name: 'controlfinance' }"
                  >Controle de financias</v-tab
                >
               <v-tab class="card-text-color" :to="{ name: 'pagamentos' }">Pagamentos</v-tab>
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
                <v-card-text class="d-flex align-center justify-center">
                  <h2 class="color-finance">Extrato Bancario</h2>
                </v-card-text>
              </div>
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
                  <h4 :class="`color-${finance.category}`" v-if="finance.category == 'Debito'">R$: - {{ finance.value }}</h4>
                  <h4 :class="`color-${finance.category}`" v-else-if="finance.category == 'Entrada'">R$: + {{ finance.value }}</h4>
                </v-col>
                <v-col offset="1" cols="12" md="3">
                  <h4 :class="`color-${finance.category}`">{{ finance.category }}</h4>
                </v-col>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
        if (items.category == "Debito" &&  items.category == "Credito") {
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
        if (items.category == "Debito" && items.category == "Credito") {
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
        if (items.category == "Debito" && items.category == "Credito") {
          this.saidas = this.saidas + parseFloat(items.value);
        }
      });
      this.total = this.entradas - this.saidas;
    },
    logout(){
        localStorage.removeItem('email')
        localStorage.removeItem('senha')
        this.$router.push({
        name: "login",
      });
      return alert("Usuario Deslogado");
    },
  },
};
</script>

<style>
.card3 {
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
.color-Debito{
  color: red;
}
.color-Entrada{
  color: green;
}

</style>