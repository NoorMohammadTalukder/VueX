import { createApp } from 'vue';
import { createStore } from 'vuex';
import App from './App.vue';

const app = createApp(App);
const counterModule={
  // namespaced:true,
  state() {
    return {
      counter: 0,
    };
  },
  mutations: {
    increament(state,payloads) {
        state.counter += payloads.value;
    },
    increament2(state) {
        state.counter += 1;
    },

  },
  actions:{
    increament2(context,){
    
      context.commit('increament2')
    },
    increament(context,payload){
        setTimeout(function(){
          context.commit('increament',payload)
        },2000);
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
};

const store = createStore({
  modules:{
    numbers:counterModule,
  },
  state() {
    return {
  
      isLoggedIn:false,
    };
  },
  mutations: {
   
    setAuth(state,payload){
      state.isLoggedIn=payload.isAuth;
    }
  },
  actions:{
   
    login(context){
      context.commit('setAuth',{isAuth:true})
    },
    logout(context){
      context.commit('setAuth',{isAuth:false})
    }
  },
  getters:{
   
    userIsAuthenticated(state){
      return state.isLoggedIn;
    }
  }
});

app.use(store);
app.mount('#app');
