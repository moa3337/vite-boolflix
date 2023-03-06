<script>

import AppMain from "./AppMain.vue";
import axios from "axios";

export default {
  data() {
    return {
      title: "BOOLFLIX",
      series: [],
      pic: "http://image.tmdb.org/t/p/w300",
    };
  },

  components: { AppMain },

  created() {
    axios.get("https://api.themoviedb.org/3/search/tv?api_key=c1610722c2c90e0f63ab759963e2c84c&query=movies")
      .then((response) => {
        console.log(response);
        this.series = response.data.results;
        //this.img = "http://image.tmdb.org/t/p/w300"
      });
  },
};
</script>

<template>
  <h1 class="text-danger fw-bold">
    <a href="">{{ title }}</a>
  </h1>
  <!---->
  <AppMain />
</template>

<style scoped></style>
