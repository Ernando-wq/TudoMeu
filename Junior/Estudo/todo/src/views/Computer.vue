<template>
  <v-container fluid>
    <v-row>
      <Navbar/>
      <v-col md="2">
        <v-table>
          <thead>
            <th class="text-left text-center">Home/Shop</th>
          </thead>
          <tbody>
            <tr v-for="item in desserts" :key="item.name">
              <td>{{ item.name }}</td>
            </tr>
          </tbody>
        </v-table>
      </v-col>
      <v-container>
        <v-row>
          <v-col
            v-for="produto in produtos"
            :key="produto"
            md="3"
            class="d-flex text-center"
          >
            <v-card>
              <v-card-title>{{ produto.name }}</v-card-title>
              <v-card-subtitle>Mobile</v-card-subtitle>
              <v-card-text>
                <v-img :src="produto.img"></v-img>
              </v-card-text>
              <v-divider></v-divider>
              <v-rating
                :model-value="produto.modelvalue"
                color="amber"
                density="compact"
                half-increments
                readonly
                size="small"
              ></v-rating>

              <v-card-title class="d-flex justify-end">
                {{ produto.price }}
                <v-btn @click="addCart(produto)" variant="flat"
                  ><v-icon size="25">mdi-cart-outline</v-icon></v-btn
                >
              </v-card-title>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
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
      desserts: [
        { name: "Browse Categories" },
        { name: "Filter By Price" },
        { name: "Filter By Color" },
        { name: "Filter By Ram" },
        { name: "Filter By Size" },
      ],
      produtos: [
        {
          name: "ASUS VivoBook",
          feature:
            "ASUS VivoBook 15 Thin And Light Laptop 15.6 Inch FHD Display",
          img: "https://cartproshop.com/demo/public//images/products/medium/keY4OoXOe4.webp",
          price: "$ 600.00",
          modelvalue: 2.5,
          category: "Computer",
          obs: "Fast-charging, long-lasting intelligent power and super speed processing outlast whatever you throw at Note 10+. S pen’s newest Evolution gives you the power of air gestures, a remote shutter and playlist button and handwriting-to-text, all in One Magic wand. 6.8” Nearly Bezel-less Infinity Display* Ultrasonic In-Display Fingerprint ID",
        },
        {
          name: "Apple Macbook",
          feature: "Apple Macbook Pro 13.3-Inch 2.7Ghz Dual Core I5",
          img: "https://cartproshop.com/demo/public//images/products/medium/6E5wX5Zgan.webp",
          price: "$ 700.00",
          modelvalue: 5.0,
          category: "Computer",
          obs: "The Aspire 5 is a compact laptop in a thin case with a metal cover, a high-quality Full HD IPS display and a rich set of interfaces. Thanks to its powerful components, the laptop can handle resource-intensive tasks perfectly and is also suitable for most games.",
        },
        {
          name: "Apple Macbook",
          feature: "LG 43 Inch 4K Ultra HD Smart LED TV 2020",
          img: "https://cartproshop.com/demo/public//images/products/large/aYunFteYg6.webp",
          price: "$ 800.00",
          modelvalue: 2.5,
          category: "Computer",
          obs: "The Aspire 5 is a compact laptop in a thin case with a metal cover, a high-quality Full HD IPS display and a rich set of interfaces. Thanks to its powerful components, the laptop can handle resource-intensive tasks perfectly and is also suitable for most games.",
        },
        {
          name: "Apple Macbook Pro",
          feature: "Sony 65 Inc Class 4K UHD LED Android Smart TV HDR BRAVIA",
          img: "https://cartproshop.com/demo/public//images/products/large/GUj2sOZUDj.webp",
          price: "$ 900.00",
          modelvalue: 2.0,
          category: "Computer",
        },
      ],
    };
  },
  methods: {
    addCart(produto) {
      this.$router.push({
        name: "product",
        params: {
          name: produto.name,
        },
        query: {
          product: JSON.stringify(produto),
        },
      });
    },
  },
};
</script>

<style>
</style>