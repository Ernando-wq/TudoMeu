<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
  // created(){
  //   this.isLoged()
  // },
  // methods:{
  //   isLoged(){
  //       let email = localStorage.getItem('email')
  //       let password = localStorage.getItem('password')
  //       if(email != null && password != null){

  //       }else{
  //           this.$router.push({
  //       name: "login",
  //     });
  //       }
  //   }
  // }
}
</script>
