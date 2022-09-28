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
});

app.use(store);
app.mount('#app');
