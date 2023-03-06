<script>
import AppHeader from "./AppHeader.vue";
import AppMain from "./AppMain.vue";
import axios from "axios";

export default {
  data() {
    return {
      title: "BOOLFLIX",
      series: [],
      endpoint: "https://api.themoviedb.org/3/search/tv?api_key=c1610722c2c90e0f63ab759963e2c84c",
      pic: "http://image.tmdb.org/t/p/w300",
    };
  },

  components: { AppHeader, AppMain },

  created() {
    axios.get(this.endpoint + "&query=movies")
      .then((response) => {
        console.log(response);
        this.series = response.data.results;
        //this.img = "http://image.tmdb.org/t/p/w300"
      });
  },

  methods: {
    fetchFilter(term) {
      console.log(term);
      axios.get(this.endpoint + "&query=" + term)
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
  <main class="bg-secondary">
    <AppMain :TVseries="series" />
  </main>
</template>

<style scoped></style>
