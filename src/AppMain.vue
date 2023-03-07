<script>
import { store } from "./data/store";
export default {
    data() {
        return {
            //store,
            pic: "http://image.tmdb.org/t/p/w300"
        };
    },

    //components: {  },
    props: { TVmovies: Array, TVseries: Array, pic: String },

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
        <h2 class="text-light fw-bold">Movies</h2>
        <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4">
            <div class="col mt-3" v-for="movie in TVmovies">
                <img class="img-fluid" :src="pic + movie.poster_path" alt="">
                <div class="position-absolute top-0 start-25">
                    <h4 v-if="movie.title !== 'Movies'" class="text-light">{{ movie.title }}</h4>
                    <p class="text-light">originale title: {{ movie.original_title }}</p>
                    <p class="text-light">
                        language: <img :src="getFalg(movie.original_language)" alt="">
                    </p>
                    <p class="text-light">vote: {{ movie.vote_average }}</p>
                </div>
            </div>
        </div>
        <!-- SERIE TV -->
        <h2 class="text-light fw-bold mt-5">Serie TV</h2>
        <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4">
            <div class="col mt-3" v-for="serie in TVseries">
                <img class="img-fluid" :src="pic + serie.poster_path" alt="">
                <div class="position-absolute top-0 start-25">
                    <h4 v-if="serie.title !== 'Movies'" class="text-light">{{ serie.name }}</h4>
                    <p class="text-light">originale title: {{ serie.original_title }}</p>
                    <p class="text-light">
                        language: <img :src="getFalg(serie.original_language)" alt="">
                    </p>
                    <p class="text-light">vote: {{ serie.vote_average }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.col {
    max-width: 300px;
    position: relative;
    cursor: pointer;
}

.position-absolute {
    opacity: 0;
    margin-left: 5px;
}

.col:hover .position-absolute {
    opacity: 1;
}

.col:hover .img-fluid {
    opacity: 0.1;
}
</style>