<script>
import AppHeader from "./AppHeader.vue";
import AppMain from "./AppMain.vue";
import axios from "axios";
import { store } from "./data/store";

export default {
  data() {
    return {
      title: "BOOLFLIX",
      movies: [],
      endpoint: "https://api.themoviedb.org/3/search/movie?api_key=c1610722c2c90e0f63ab759963e2c84c",
      pic: "http://image.tmdb.org/t/p/w300",
    };
  },

  components: { AppHeader, AppMain },

  created() {
    axios.get(this.endpoint + "&query=movies")
      .then((response) => {
        console.log(response);
        this.movies = response.data.results;
        this.img = "http://image.tmdb.org/t/p/w300"
      });
  },

  methods: {
    fetchFilter(term) {
      //console.log(term);
      axios.get(this.endpoint + "&query=" + term)
        .then((response) => {
          this.movies = response.data.results;
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
  <main class="bg-secondary">
    <AppMain :TVmovies="movies" :pic="pic" />
  </main>
</template>

<style scoped></style>
