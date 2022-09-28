<template>
    <h1>Favourote Counter: {{counter}}</h1>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    computed:{
     counter(){
         return this.$store.getters.favCounter;
     }   
    }
}
</script>