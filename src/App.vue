<script>
import AppHeader from "./AppHeader.vue";
import AppMain from "./AppMain.vue";
import axios from "axios";
import { store } from "./data/store";

export default {
  data() {
    return {
      store,
      title: "BOOLFLIX",
      movies: [],
      series: [],
      endpointMovies: "https://api.themoviedb.org/3/search/movie?api_key=c1610722c2c90e0f63ab759963e2c84c",
      endpointSeries: "https://api.themoviedb.org/3/search/tv?api_key=c1610722c2c90e0f63ab759963e2c84c",
      pic: "http://image.tmdb.org/t/p/w300",
    };
  },

  components: { AppHeader, AppMain },

  created() {
    axios.get(this.endpointMovies + "&query=movies")
      .then((response) => {
        console.log(response);
        this.movies = response.data.results;
        this.img = "http://image.tmdb.org/t/p/w300"
      });
    axios.get(this.endpointSeries + "&query=series")
      .then((response) => {
        console.log(response);
        this.series = response.data.results;
        this.img = "http://image.tmdb.org/t/p/w300"
      });
  },

  methods: {
    fetchFilter(term) {
      this.fetchMovies(term);
      this.fetchSeries(term);
    },

    fetchMovies(term) {
      //console.log(term);
      axios.get(this.endpointMovies + "&query=" + term)
        .then((response) => {
          this.movies = response.data.results;
        });
    },
    fetchSeries(term) {
      //console.log(term);
      axios.get(this.endpointSeries + "&query=" + term)
        .then((response) => {
          this.series = response.data.results;
        });
    },
  },
};
</script>

<template>
  <header class="bg-dark">
    <AppHeader placeholder="Cerca Titolo" @on-search="fetchFilter" :title="title" />
  </header>
  <!---->
  <main class="pt-4">
    <AppMain :TVmovies="movies" :TVseries="series" :pic="pic" />
  </main>
</template>

<style scoped>
main {
  background-color: rgb(77, 77, 77);
}
</style>
