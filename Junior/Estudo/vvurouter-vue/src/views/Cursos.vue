<template>
  <div class="about">
    <h1>Java</h1>
    <p>Esse é o curso ativo: {{curso}}</p>
    <router-link :to="{name: 'curso' , params: {curso: 'JavaScript'}}">Java</router-link> |
    <router-link :to="{name: 'curso' , params: {curso: 'HTML'}}">HTML</router-link> |
    <router-link :to="{name: 'curso' , params: {curso: 'CSS'}}">CSS</router-link>
     <router-view/>
  </div>
</template>
<script>
export default {
  props: ["curso"],
}
</script>