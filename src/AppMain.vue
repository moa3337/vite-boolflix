<script>
import { store } from "./data/store";
export default {
    data() {
        return {
            store,
        };
    },

    //components: {  },
    props: { TVmovies: Array, pic: String },

    methods: {
        getFalg(country) {
            country = country.toUpperCase();

            if (country == "EN") return "https://flagsapi.com/GB/flat/24.png";
            if (country == "JA") return "https://flagsapi.com/JP/flat/24.png";
            return "https://flagsapi.com/" + country + "/flat/24.png";
        },
    },
};
</script>

<template>
    <div class="container">
        <!--  -->
        <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4">
            <div class="col mt-3" v-for="movie in TVmovies">
                <img class="img-fluid" :src="pic + movie.poster_path" alt="">
                <h4 v-if="movie.title !== 'Movies'" class="text-light">{{ movie.title }}</h4>
                <p class="text-light">originale title: {{ movie.original_title }}</p>
                <p class="text-light">
                    language: ({{ }})
                    <img :src="getFalg(movie.original_language)" alt="">
                </p>
                <p class="text-light">vote: {{ movie.vote_average }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped></style>