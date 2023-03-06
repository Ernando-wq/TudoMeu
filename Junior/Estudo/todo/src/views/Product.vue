<template>
  <v-container fluid>
    <v-row>
      <Navbar/>
      <v-col md="6">
        <h4>Home / {{ product.category }} / {{ product.feature }}</h4>
        <v-img :src="product.img"></v-img>
      </v-col>
      <v-col md="6">
        {{ product.category }}
        <h3>{{ product.feature }}</h3>
        <p>
          <v-rating
            :model-value="product.modelvalue"
            color="amber"
            density="compact"
            half-increments
            readonly
            size="small"
          ></v-rating>
        </p>
        <v-divider></v-divider>

        <h2 class="mt-5">
          <p>{{ product.price }}</p>
        </h2>

        <v-divider class="mt-5"></v-divider>

        <p class="mt-5">{{ product.obs }}</p>

        <v-divider class="mt-5"></v-divider>

        <div class="d-flex mt-5">
          <v-card>
            <v-btn @click="add()" variant="flat">+</v-btn>
            {{ number }}
            <v-btn @click="remove()" variant="flat">-</v-btn>
          </v-card>
          <v-btn class="ms-4" color="primary"
            ><v-icon>mdi-cart-outline</v-icon> Add to Card</v-btn
          >
          <v-btn class="ms-4" variant="flat"
            ><v-icon>mdi-heart-outline</v-icon> Add to wishlist</v-btn
          >
        </div>

        <v-divider class="mt-5"></v-divider>

        <div class="mt-3">
          <b>Share</b>
          <v-btn class="ms-2" variant="flat"><v-icon>mdi-facebook</v-icon></v-btn>
          <v-btn  variant="flat"><v-icon>mdi-instagram</v-icon></v-btn>
          <v-btn  variant="flat"><v-icon>mdi-bird</v-icon></v-btn>
          <v-btn  variant="flat"><v-icon>mdi-play-circle-outline</v-icon></v-btn>
        </div>
      </v-col>
    </v-row>
    <Footer class="mt-15"/>
  </v-container>
</template>

<script>
import Footer from "../components/Footer.vue"
import Navbar from "../components/Navbar.vue";
export default {
   name: 'App',
    components:{
        Footer,
        Navbar
    },
  data() {
    return {
      product: {},
      number: 0,
    };
  },
  mounted() {
    this.product = JSON.parse(this.$route.query.product);
    // this.name = this.$route.params.name;
    // this.price = this.$route.query.preço;
    // this.img = this.$route.query.image;
    // this.category = this.$route.query.categoria;
    // this.feature = this.$route.query.caracteristica;
    // this.star = this.$route.query.star;
    // this.obs = this.$route.query.observação
  },
  methods: {
    add() {
      this.number++;
    },
    remove() {
      if (this.number <= 0) {
        return alert("valor mimino 0");
      } else {
        this.number--;
      }
    },
  },
};
</script>

<style>
</style>