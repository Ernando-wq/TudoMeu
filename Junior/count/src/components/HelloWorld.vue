<template>
  <div>
    <div>
      <label for>Value:</label>
      <input type="number" v-model="value">
    </div>
    <div>
      <label for>Duration of animation:</label>
      <input type="number" v-model="duration">
    </div>
    <animated-number :value="value" :formatValue="formatToPrice" :duration="duration" />
    <hr>
    <button @click="increase">Increase 500</button>
    <button @click="decrease">Decrease 500</button>
  </div>
</template>
<script>
import AnimatedNumber from "animated-number-vue";

export default {
  components: {
    AnimatedNumber
  },
  data() {
    return {
      value: 0,
      duration: 1000
    };
  },
  methods: {
    formatToPrice(value) {
      return `<h3>$ ${Number(value).toFixed(2)}</h1>`;
    },
    increase() {
      this.value = Number(this.value) + 500;
    },
    decrease() {
      this.value = Number(this.value) - 500;
    }
  }
};
</script>

<style>
* {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}

span {
  font-size: 50px;
}

button {
  border: none;
  margin-left: 20px;
  padding: 10px;
  border-radius: 100px;
}

button:focus {
  outline: none;
}
</style>
