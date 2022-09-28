import { createApp } from 'vue';
import { createStore } from 'vuex';
import App from './App.vue';

const app = createApp(App);

const store = createStore({
  state() {
    return {
      counter: 0,
    };
  },
  mutations: {
    increament(state,payloads) {
        state.counter += payloads.value;
    },
  },
  getters:{
      favCounter(state,getters){
          if(state.counter==100){
              return 100;
          }
          else{
                getters.normalIncreament;
          }
      },
      normalIncreament(state) {
        return state.counter*20;
    },
  }
});

app.use(store);
app.mount('#app');
