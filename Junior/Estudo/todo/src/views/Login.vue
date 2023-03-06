<template>
  <v-container fluid>
    <v-row>
      <Navbar/>
      <v-col cols="12" md="12"> Home/Login </v-col>
      <v-col class="d-flex justify-center" cols="12" md="12">
        <v-btn variant="flat"><h3>Login</h3></v-btn>
        <v-btn :to="{name: 'register'}" variant="plain"><h3>register</h3></v-btn>
      </v-col>
      <v-col class="d-flex justify-center" cols="12" md="12">
        <v-card width="450">
          <v-card-text class="mt-5">
            <v-text-field variant="solo" placeholder="username"></v-text-field>
            <v-text-field variant="solo" placeholder="password"></v-text-field>
          </v-card-text>
          <div class="d-flex justify-center mb-5">
            <v-btn width="300" color="primary">Login</v-btn>
          </div>
          <v-card-actions class="d-flex justify-center"
            ><v-btn variant="text" color="deep-purple-accent-4">
              Esqueceu a Senha?
            </v-btn>
            </v-card-actions
          >
        </v-card>
      </v-col>
    </v-row>
    <Footer class="mt-15"/>
  </v-container>
</template>

<script>
import Footer from "../components/Footer.vue"
import Navbar from "../components/Navbar.vue"
export default {
    name: 'App',
    components:{
        Footer,
        Navbar
    },
    data(){

    }
};
</script>

<style>
</style>