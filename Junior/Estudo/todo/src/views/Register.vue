<template>
  <v-container fluid>
    <v-row>
      <Navbar/>
      <v-col cols="12" md="12"> Home/Login </v-col>
      <v-col class="d-flex justify-center" cols="12" md="12">
        <v-btn variant="flat" :to="{name: 'login'}"><h3>Login</h3></v-btn>
        <v-btn variant="plain"><h3>register</h3></v-btn>
      </v-col>
      <v-col class="d-flex justify-center" cols="12" md="12">
        <v-card width="450">
          <v-card-text class="mt-5">
            <v-text-field variant="solo" placeholder="Username"></v-text-field>
            <v-text-field variant="solo" placeholder="Email"></v-text-field>
            <v-text-field
              v-model="password"
              :append-inner-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules.required, rules.min]"
              :type="show1 ? 'text' : 'password'"
              name="input-10-1"
              label="Password"
              variant="solo"
              hint="At least 8 characters"
              counter
              @click:append-inner="show1 = !show1"
            ></v-text-field>
            <v-text-field
              v-model="confirm_password"
              :append-inner-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules.required, rules.min]"
              :type="show1 ? 'text' : 'password'"
              name="input-10-1"
              label="Confirm Password"
              variant="solo"
              hint="At least 8 characters"
              counter
              @click:append-inner="show2 = !show2"
            ></v-text-field>
            <!-- <v-text-field
              type="number"
              variant="solo"
              placeholder="password"
            ></v-text-field> -->
          </v-card-text>
          <div class="d-flex justify-center mb-5">
            <v-btn width="300" color="primary">Login</v-btn>
          </div>
          <v-card-actions class="d-flex justify-center"
            ><v-btn variant="text" color="deep-purple-accent-4">
              Registrar Agora?
            </v-btn>
          </v-card-actions>
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
  data() {
    return {
      show1: false,
      show2: true,
      password: "",
      confirm_password: "",
      rules: {
        required: (value) => !!value || "Required.",
        min: (v) => v.length >= 8 || "Min 8 characters",
        emailMatch: () => `The email and password you entered don't match`,
      },
    };
  },
};
</script>

<style>
</style>