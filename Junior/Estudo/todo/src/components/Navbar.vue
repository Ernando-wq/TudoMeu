<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" md="4">
        <v-btn variant="flat"><v-icon size="20">mdi-facebook</v-icon></v-btn>
        <v-btn variant="flat"><v-icon size="20">mdi-instagram</v-icon></v-btn>
        <v-btn variant="flat"><v-icon size="20">mdi-bird</v-icon></v-btn>
      </v-col>
      <v-col class="text-center" cols="12" md="4"> Welcome to CartPro </v-col>
      <v-col class="d-flex justify-end" cols="12" md="4">
        <span>Order Tracking</span>
        <span class="ms-5"> English</span>
        <span class="ms-5"> USD</span>
      </v-col>

      <v-col md="3" class="mt-5">
        <img
          width="200"
          src="https://cartproshop.com/demo/public/images/storefront/logo/0dhZQlZtZI.png"
          alt=""
        />
      </v-col>
      <v-col md="6" class="mt-5">
        <v-text-field
          density="compact"
          variant="solo"
          append-inner-icon="mdi-magnify"
          label="Search Products"
        >
        </v-text-field
      ></v-col>
      <v-col md="3" class="mt-5 d-flex justify-end aling-center">
        <v-btn :to="{ name: 'login' }" variant="flat"
          ><v-icon size="25">mdi-account-outline</v-icon></v-btn
        >
        <v-btn variant="flat"
          ><v-icon size="25">mdi-heart-outline</v-icon></v-btn
        >
        <v-btn variant="flat"
          ><v-icon size="25">mdi-cart-outline</v-icon></v-btn
        >
      </v-col>

      <v-col md="3" class="mt-5">
        <div class="text-center">
          <v-select density="compact" v-model="product" :items="products">
          </v-select>
          <v-menu :location="location">
            <v-list>
              <v-list-item v-for="(item, index) in items" :key="index">
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </v-col>
      <v-col md="7" class="mt-5 d-flex justify-space-around">
        <v-btn variant="flat" :to="{ name: 'homepage' }">Home</v-btn>
        <v-btn variant="flat">All categories</v-btn>
        <v-btn variant="flat" @click="nextPage()">Shop</v-btn>
        <v-btn variant="flat">Brands</v-btn>
        <v-btn variant="flat">Phones</v-btn>
        <v-btn variant="flat">Watches</v-btn>
        <v-btn variant="flat">Gadgets</v-btn>
      </v-col>
      <v-col md="2" class="mt-5 d-flex justify-end">
        <v-btn variant="flat"
          ><v-icon size="20">mdi-tag-outline</v-icon> Daily Deals</v-btn
        >
      </v-col>
    </v-row>
    <v-divider></v-divider>
  </v-container>
  <router-view></router-view>
</template>
<script>
export default {
  name: "Navbar",
  data() {
    return {
      products: ["Mobile", "Computed", "Television", "Watch"],
      product: "Shopping By Category",
    };
  },
  methods: {
    nextPage() {
      this.$router.push({
        name: "shop",
      });
    },
  },
};
</script>
<style>
</style>