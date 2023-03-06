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
          name: "Samsung Galaxy",
          feature: "Samsung Galaxy A52 5G Android Cell Phone",
          img: "https://cartproshop.com/demo/public//images/products/medium/gxAhN2e8yY.webp",
          price: "$ 160.00",
          modelvalue: 4.0,
          category: "Mobile",
          obs: "The Aspire 5 is a compact laptop in a thin case with a metal cover, a high-quality Full HD IPS display and a rich set of interfaces. Thanks to its powerful components, the laptop can handle resource-intensive tasks perfectly and is also suitable for most games.",
        },
        {
          name: "Apple iPhone ",
          feature: "Apple IPhone 11 64GB Yellow Fully Unlocked",
          img: "https://cartproshop.com/demo/public//images/products/medium/f6qXdQdZVm.webp",
          price: "$ 100.00",
          modelvalue: 5.0,
          category: "Mobile",
          obs: "The Aspire 5 is a compact laptop in a thin case with a metal cover, a high-quality Full HD IPS display and a rich set of interfaces. Thanks to its powerful components, the laptop can handle resource-intensive tasks perfectly and is also suitable for most games. Key Features: slim body with metal cover latest Intel Core i5-1135G7 processor (4 cores / 8 threads) 8GB DDR4 RAM and fast 512GB PCIe SSD NVIDIA GeForce MX350 2GB GDDR5 graphics card backlit keyboard, touchpad with gesture support",
        },
        {
          name: "Apple iPhone ",
          feature: "Apple IPhone X 64GB Silver Fully Unlocked",
          img: "https://cartproshop.com/demo/public//images/products/medium/oxnt4KyMw6.webp",
          price: "$ 200.00",
          modelvalue: 3.0,
          category: "Mobile",
          obs: "The Aspire 5 is a compact laptop in a thin case with a metal cover, a high-quality Full HD IPS display and a rich set of interfaces. Thanks to its powerful components, the laptop can handle resource-intensive tasks perfectly and is also suitable for most games.",
        },
        {
          name: "Apple iPhone ",
          feature: "Apple IPhone 11 Pro Max (64GB) – Silver",
          img: "https://cartproshop.com/demo/public//images/products/medium/ydFqlpWr4D.webp",
          price: "$ 400.00",
          modelvalue: 3.5,
          category: "Mobile",
          obs: "The Aspire 5 is a compact laptop in a thin case with a metal cover, a high-quality Full HD IPS display and a rich set of interfaces. Thanks to its powerful components, the laptop can handle resource-intensive tasks perfectly and is also suitable for most games.",
        },
        {
          name: "Apple iPhone",
          feature: "Apple IPhone XS Max-64GB -White",
          img: "https://cartproshop.com/demo/public//images/products/medium/R9phgu9T1C.webp",
          price: "$ 500.00",
          modelvalue: 4.5,
          category: "Mobile",
          obs: "6.5-inch Super Retina display (OLED) with HDR IP68 dust and water resistant (maximum depth of 2 meters up to 30 minutes) 12MP dual cameras with dual OIS and 7MP TrueDepth front camera—Portrait mode, Portrait Lighting, Depth Control, and Smart HDR",
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