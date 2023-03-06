<template>
  <v-container fluid>
    <v-row class="footer">
      <v-col
        cols="12"
        md="6"
        class="d-flex align-center justify-center pt-8 pb-8"
      >
        <v-icon color="white" class="pt-6 pb-6" size="45">mdi-send</v-icon>
        <h2>
          <p class="ms-3" style="color: white">Subscribe to our Newsletter</p>
        </h2>
      </v-col>
      <v-col cols="12" md="6" class="pt-8 pb-8">
        <v-card class="mx-auto" color="grey-lighten-3" max-width="400">
          <v-card-text>
            <v-text-field
              density="compact"
              label="Search templates"
              append-inner-icon="mdi-magnify"
              single-line
              hide-details
            ></v-text-field>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="mt-5">
      <v-col cols="12" md="3">
        <v-img
          width="200"
          src="https://cartproshop.com/demo/public/images/storefront/logo/0dhZQlZtZI.png"
        ></v-img>
        <p class="mt-5">
          Got Question? Call us : <br />
          +880 192 4756 759
        </p>
        <p class="mt-5">Contact Info:</p>
        <p>irfanchowdhury434@gmail.com</p>
        <p>Dewanhat, Chittagong</p>
      </v-col>
      <v-col cols="12" md="3">
        <h4 class="ms-4">QUICK SHOP</h4>
        <v-btn class="mt-5" variant="plain" :to="{name: 'computer'}">Computer / Accessories</v-btn>
        <v-btn class="mt-2" variant="plain">Camera / Photo</v-btn>
        <v-btn class="mt-2" variant="plain">Furniture / Home Decor</v-btn>
        <v-btn class="mt-2" variant="plain">Smart Phones</v-btn>
      </v-col>
      <v-col cols="12" md="3">
        <h4 class="ms-4">HELP CENTER</h4>
        <v-btn class="mt-5" variant="plain">Terms / Condition</v-btn>
        <v-btn class="mt-2" variant="plain">About CartPro</v-btn>
      </v-col>
      <v-col cols="12" md="3">
        <h4 class="ms-4">OTHERS</h4>
        <p>
          <v-btn class="mt-5" variant="plain">About Us</v-btn>
        </p>
        <p>
          <v-btn class="mt-2" variant="plain">Contact Us</v-btn>
        </p>
        <p>
          <v-btn class="mt-2" variant="plain">FAQ</v-btn>
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style>
.footer {
  background-color: #041e42;
}
</style>