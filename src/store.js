import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    films:[],
    film:{}
  },
  actions: {
    loadFilms(context,search){
      context.commit('setFilms', []);
      Axios.get(`http://www.omdbapi.com/?s=${search}&apikey=5d1f539e`).then(res => {
        context.commit('setFilms', res.data.Search);
      })
    },
    loadFilm(context,id){
      context.commit('setFilm', {});
      Axios.get(`http://www.omdbapi.com/?i=${id}&apikey=5d1f539e`).then(res => {
        console.log(res.data, 'res.data')
        context.commit('setFilm', res.data);
      })
    }
  },
  mutations: {
    setFilms(state, payload) {
      state.films = payload
    },
    setFilm(state, payload) {
      state.film = payload
    },
  },
  getters:{
    getFilms(state){
      return state.films
    },
    getFilm(state) {
      return state.film
    }
  }
})
