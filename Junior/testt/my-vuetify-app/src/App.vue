<template>
  <div>
    <h1>Geolocation</h1>
    <p>Your location is:</p>

    <button @click="showDialogAlert()">
      Get Current Location
    </button>
  </div>
</template>
  
<script>
import { Dialog } from '@capacitor/dialog';
import { LocalNotifications } from '@capacitor/local-notifications';


// import { defineComponent, ref } from 'vue';
// import Plugins from '@capacitor/core';
// import { Geolocation } from '@capacitor/geolocation';
export default {
  methods: {
    async showDialogAlert() {
      const randomId = Math.floor(Math.random() * 10000) + 1;

    LocalNotifications.schedule({
      notifications: [
        {
          title: "Test Title",
          body: "Test Body",
          id: randomId,
          schedule: {
            at: new Date(Date.now() + 1000 * 60), // in a minute
            repeats: true,
            every: "minute"
          }
        }
      ]
    });
    }
  }
}
</script>