<template>
  <div class="about">
    <h1>{{ curso }}</h1>
    <router-link :to="{name: 'descricao'}">Descrição</router-link> |
    <router-link :to="{name: 'aulas'}">Aulas</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  props: ["curso"],
};
</script>