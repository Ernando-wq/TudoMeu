<template>
  <v-container fluid>
    <v-row>
      <Navbar/>
      <v-col md="7" class="mt-10">
        <v-card>
          <v-img
            src="https://cartproshop.com/demo/public/images/sliders/brOf20e98c.png"
          ></v-img>
        </v-card>
      </v-col>
      <v-col md="5">
        <v-card>
          <v-img
            src="https://cartproshop.com/demo/public//images/storefront/slider_banners/e9OGBqHFpA.jpg"
          ></v-img>
        </v-card>
        <v-card class="mt-3">
          <v-img
            src="https://cartproshop.com/demo/public//images/storefront/slider_banners/SNIWak7D4E.jpg"
          ></v-img>
        </v-card>
      </v-col>
      <v-col md="12">
        <h3>Top Categories</h3>
      </v-col>

      <v-divider></v-divider>

      <v-col md="2" class="d-flex justify-center mt-5">
        <v-card height="180">
          <v-card-text>
            <v-img
              width="100"
              src="https://cartproshop.com/demo/public/images/categories/LQUANnpB58.png"
            ></v-img>
             <v-btn
              class="d-flex justify-center"
              variant="float"
              :to="{ name: 'phone' }"
              >Mobile</v-btn
            >
            <!-- <p class="mt-2 d-flex justify-center">Mobile</p> -->
          </v-card-text>
        </v-card>
      </v-col>
      <v-col md="2" class="d-flex justify-center mt-5">
          <v-card>
            <v-card-text>
              <v-img
                width="100"
                src="https://cartproshop.com/demo/public/images/categories/DvCxbcTtyF.png"
              ></v-img>
               <v-btn
              class="d-flex justify-center"
              variant="float"
              :to="{ name: 'computer' }"
              >Computer</v-btn
            >
            </v-card-text>
          </v-card>
      </v-col>
      <v-col md="2" class="d-flex justify-center mt-5">
        <a href="">
          <v-card height="180">
            <v-card-text>
              <v-img
                width="100"
                src="https://cartproshop.com/demo/public/images/categories/ypdIDYqXwu.png"
              ></v-img>
              <p class="d-flex justify-center">Television</p>
            </v-card-text>
          </v-card>
        </a>
      </v-col>
      <v-col md="2" class="d-flex justify-center mt-5">
        <a href="">
          <v-card height="180">
            <v-card-text>
              <v-img
                width="100"
                src="https://cartproshop.com/demo/public/images/categories/V3avktsIxq.jpg"
              ></v-img>
              <p class="mt-2 d-flex justify-center">Watch</p>
            </v-card-text>
          </v-card>
        </a>
      </v-col>
      <v-col md="2" class="d-flex justify-center mt-5">
        <a href="">
          <v-card height="180">
            <v-card-text>
              <v-img
                width="100"
                src="https://cartproshop.com/demo/public/images/categories/XrVPQksQey.png"
              ></v-img>
              <p class="mt-2 d-flex justify-center">HeadPhone</p>
            </v-card-text>
          </v-card>
        </a>
      </v-col>
      <v-col md="2" class="d-flex justify-center mt-5">
        <a href="">
          <v-card height="180">
            <v-card-text>
              <v-img
                width="100"
                src="https://cartproshop.com/demo/public/images/categories/HZXLvV3Itt.jpg"
              ></v-img>
              <p class="mt-2 d-flex justify-center">Clothes</p>
            </v-card-text>
          </v-card>
        </a>
      </v-col>
      <v-col md="12" class="d-flex mt-15">
        <v-col md="4">
          <v-card>
            <v-img
              src="https://cartproshop.com/demo/public/images/storefront/three_column_full_width_banners/0fDYh0O2sH.jpg"
            ></v-img>
          </v-card>
        </v-col>
        <v-col md="4">
          <v-card>
            <v-img
              src="https://cartproshop.com/demo/public/images/storefront/three_column_full_width_banners/wpqwCT51dE.jpg"
            ></v-img>
          </v-card>
        </v-col>
        <v-col md="4">
          <v-card>
            <v-img
              src="https://cartproshop.com/demo/public/images/storefront/three_column_full_width_banners/lIG8AmDGIw.jpg"
            ></v-img>
          </v-card>
        </v-col>
      </v-col>
      <v-col md="12">
        <v-btn variant="flat">Mobile</v-btn>
        <v-btn variant="flat" class="ms-2">Computer</v-btn>
        <v-btn variant="flat" class="ms-2">Television</v-btn>
        <v-btn variant="flat" class="ms-2">Headphone</v-btn>
        <v-divider></v-divider>
      </v-col>
      <v-col md="2,4" class="d-flex text-center">
        <v-card>
          <v-card-title>Samsung Galaxy</v-card-title>
          <v-card-subtitle>Mobile</v-card-subtitle>
          <v-card-text>
            <v-img
              src="https://cartproshop.com/demo/public//images/products/medium/gxAhN2e8yY.webp"
            ></v-img>
          </v-card-text>
          <v-divider></v-divider>
          <v-rating
            :model-value="4.5"
            color="amber"
            density="compact"
            half-increments
            readonly
            size="small"
          ></v-rating>

          <v-card-title class="d-flex justify-end">
            $ 150.00
            <v-btn variant="flat"
              ><v-icon size="25">mdi-cart-outline</v-icon></v-btn
            >
          </v-card-title>
        </v-card>
      </v-col>
      <v-col md="2,4" class="d-flex text-center">
        <v-card>
          <v-card-title>Apple iPhone 11</v-card-title>
          <v-card-subtitle>Mobile</v-card-subtitle>
          <v-card-text>
            <v-img
              src="https://cartproshop.com/demo/public//images/products/medium/ydFqlpWr4D.webp"
            ></v-img>
          </v-card-text>
          <v-divider></v-divider>
          <v-rating
            :model-value="3"
            color="amber"
            density="compact"
            half-increments
            readonly
            size="small"
          ></v-rating>

          <v-card-title class="d-flex justify-end">
            $ 750.00
            <v-btn variant="flat"
              ><v-icon size="25">mdi-cart-outline</v-icon></v-btn
            >
          </v-card-title>
        </v-card>
      </v-col>
      <v-col md="2,4" class="d-flex text-center">
        <v-card>
          <v-card-title>OnePlus 8 Pro</v-card-title>
          <v-card-subtitle>Mobile</v-card-subtitle>
          <v-card-text>
            <v-img
              src="https://cartproshop.com/demo/public//images/products/medium/XAbIiTyFAC.webp"
            ></v-img>
          </v-card-text>
          <v-divider></v-divider>
          <v-rating
            :model-value="4"
            color="amber"
            density="compact"
            half-increments
            readonly
            size="small"
          ></v-rating>

          <v-card-title class="d-flex justify-end">
            $ 450.00
            <v-btn variant="flat"
              ><v-icon size="25">mdi-cart-outline</v-icon></v-btn
            >
          </v-card-title>
        </v-card>
      </v-col>
      <v-col md="2,4" class="d-flex text-center">
        <v-card>
          <v-card-title>Apple iPhone XS</v-card-title>
          <v-card-subtitle>Mobile</v-card-subtitle>
          <v-card-text>
            <v-img
              src="https://cartproshop.com/demo/public//images/products/medium/R9phgu9T1C.webp"
            ></v-img>
          </v-card-text>
          <v-divider></v-divider>
          <v-rating
            :model-value="4.5"
            color="amber"
            density="compact"
            half-increments
            readonly
            size="small"
          ></v-rating>

          <v-card-title class="d-flex justify-end">
            $ 100.00
            <v-btn variant="flat"
              ><v-icon size="25">mdi-cart-outline</v-icon></v-btn
            >
          </v-card-title>
        </v-card>
      </v-col>
      <v-col md="2,4" class="d-flex text-center">
        <v-card>
          <v-card-title>Samsung Galaxy</v-card-title>
          <v-card-subtitle>Mobile</v-card-subtitle>
          <v-card-text>
            <v-img
              src="https://cartproshop.com/demo/public//images/products/medium/9og6IARLNE.webp"
            ></v-img>
          </v-card-text>
          <v-divider></v-divider>
          <v-rating
            :model-value="4.5"
            color="amber"
            density="compact"
            half-increments
            readonly
            size="small"
          ></v-rating>

          <v-card-title class="d-flex justify-end">
            $ 200.00
            <v-btn variant="flat"
              ><v-icon size="25">mdi-cart-outline</v-icon></v-btn
            >
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Navbar from "../components/Navbar.vue";
export default {
  name: "App",
  components:{
    Navbar
  },
  data() {
    return {
      products: ["Mobile", "Computed", "Television", "Watch"],
      product: "Shopping By Category",
    };
  },
};
</script>

<style>
</style>