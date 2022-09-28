<template>
  <base-container title="Vuex">
    <!-- <h3>{{counter}}</h3> -->
    <the-counter></the-counter>
    <button @click="addOne">Add 1</button>
    <fav-counter></fav-counter>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import FavCounter from './components/FavCounter.vue';

export default {
  components: {
    BaseContainer,
    TheCounter,
    FavCounter,
  },
  computed:{
    counter(){
      return this.$store.state.counter;
    }
  },
  methods:{
    addOne(){
      // this.$store.state.counter++;
      // this.$store.commit("increament",{value:10});
      this.$store.commit({
        type:"increament",
        value:20,
      });
    }
  }
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