<template>
  <div>
    <v-sheet class="pa-12 div-height d-flex align-center" rounded>
      <v-card class="mx-auto px-6 py-8 bg-indigo-darken-3 " width="400">
        <v-card-title class="text-center">Login</v-card-title>
        <v-form v-model="form" @submit.prevent="onSubmit">
          <v-text-field
            v-model="email"
            :readonly="loading"
            class="mb-2"
            clearable
            label="Email"
          ></v-text-field>

          <v-text-field
            v-model="password"
            :readonly="loading"
            clearable
            type="password"
            label="Password"
            placeholder="Enter your password"
          ></v-text-field>

          <br />

          <v-btn
            :disabled="!form"
            :loading="loading"
            block
            color="default"
            size="large"
            type="submit"
            variant="elevated"
            @click="login()"
          >
            Sign In
          </v-btn>
        </v-form>
      </v-card>
    </v-sheet>
  </div>
</template>

<script>
export default {
  data: () => ({
    form: false,
    email: "",
    password: "",
    loading: false,
  }),

  methods: {
    onSubmit() {
      if (!this.form) return;

      this.loading = true;

      setTimeout(() => (this.loading = false), 1000);
    },
    login() {
      if (this.password == "" || this.email == "") {
        return alert("Usuario ou Senha invalido");
      } else {
        localStorage.setItem("email", this.email);
        localStorage.setItem("senha", this.password);
        alert("Usuario Logado com Sucesso");
        this.$router.push("finance");
      }
    },
  },
};
</script>

<style>
.card {
  background-color: navy;
}
.card-text-color {
  color: white;
}
.div-height {
  height: 100vh;
}
</style>