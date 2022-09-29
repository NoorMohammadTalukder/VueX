<template>

    <h3>{{normalIncreament}}</h3>
    
</template>

<script>
import { mapGetters } from 'vuex';

export default {

  computed:{
    // counter(){
    //   return this.$store.state.counter;
    // },
    ...mapGetters(['normalIncreament'])
    // ... mapGetters('numbers',{
    //   inc:"normalIncreament"
    // })
  
  },
 
  
};
</script>

