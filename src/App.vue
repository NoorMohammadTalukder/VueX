<template>
  <base-container title="Vuex" v-if="isAuth">
    <!-- <h3>{{counter}}</h3> -->
    <the-counter></the-counter>
    <button @click="addOne">Add 1</button>
    
    <button @click="increament2">Add 1 -Action</button>
    <fav-counter></fav-counter>
  </base-container>

  <base-container title="Auth">
  <user-auth></user-auth>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import FavCounter from './components/FavCounter.vue';
import UserAuth from './components/UserAuth.vue'
import { mapActions } from 'vuex';
export default {
  components: {
    BaseContainer,
    TheCounter,
    FavCounter,
    UserAuth,
  },
  computed:{
    counter(){
      return this.$store.state.counter;
    },
    isAuth(){
            return this.$store.getters.userIsAuthenticated;
        }
  },
  methods:{
    addOne(){
      // alert();
      // this.$store.state.counter++;
      // this.$store.commit("increament",{value:10});
      // this.$store.commit({
      this.$store.dispatch({
        type:'increament',
        value:20,
      });
    },
    ...mapActions(['increament2'])
  },
  
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>