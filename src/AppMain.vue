<script>
import { store } from "./data/store";
export default {
    data() {
        return {
            //store,
            pic: "http://image.tmdb.org/t/p/w300",
            picNull: "src/img/black2.jpg",
            selectList: '',
            resultType: 'Film',
        };
    },

    //components: {  },
    props: { TVmovies: Array, TVseries: Array, pic: String },

    /*computed: {
        wachList() {
            return this.selectList === 'Film' ? this.TVmovies : this.TVseries;
        },
    },*/

    methods: {
        getFalg(country) {
            country = country.toUpperCase();

            if (country == "EN") return "https://flagsapi.com/GB/flat/24.png";
            if (country == "JA") return "https://flagsapi.com/JP/flat/24.png";
            return "https://flagsapi.com/" + country + "/flat/24.png";
        },

        //imgNull(poster_path) {
        // if (poster_path == "null") return "https://www.google.com/url?sa=i&url=https%3A%2F%2Fit.pngtree.com%2Ffreebackground%2Fblack-background-texture-advertising_975103.html&psig=AOvVaw0onYU40tRG-VR8-1dj2r-M&ust=1678355370917000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCICv_5CHzP0CFQAAAAAdAAAAABAK";
        //}
    },
};
</script>

<template>
    <div class="container">
        <!-- MOVIES -->
        <div class="mb-4 text-light">
            <h4 class="">Cosa vorresti guardare</h4>
            <input class="form-check-input me-3" name="cosaGuardare" type="radio" id="Film" value="Film"
                v-model="resultType">
            <label for="Film">Film</label>
            <input class="form-check-input mx-3" name="cosaGuardare" type="radio" id="SerieTV" value="SerieTV"
                v-model="resultType">
            <label for="SerieTV">Serie TV</label>
        </div>

        <!-- MOVIES -->
        <div v-if="resultType == 'Film'">
            <h2 class="text-light fw-bold">Movies</h2>
            <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4">
                <div class="col mt-3 pb-5" v-for="movie in TVmovies">
                    <img v-if="movie.poster_path != null" class="h-100 img-fluid rounded-3" :src="pic + movie.poster_path"
                        alt="">
                    <img v-else class="h-100 img-fluid rounded-3" :src="picNull" alt="Errore nel caricamento dell'immagine">
                    <div class="position-absolute top-0 start-25">
                        <h4 v-if="movie.title !== 'Movies'" class="text-light">{{ movie.title }}</h4>
                        <p class="text-light mt-5">originale title: {{ movie.original_title }}</p>
                        <p class="text-light">
                            language: <img :src="getFalg(movie.original_language)" alt="">
                        </p>
                        <p class="text-light">vote: {{ movie.vote_average }}</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- SERIE TV -->
        <div v-if="resultType == 'SerieTV'">
            <h2 class="text-light fw-bold mt-5">Serie TV</h2>
            <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4">
                <div class="col mt-3 pb-5" v-for="serie in TVseries">
                    <img v-if="serie.poster_path != null" class="h-100 img-fluid rounded-3" :src="pic + serie.poster_path"
                        alt="">
                    <img v-else class="img-fluid h-100 rounded-3" :src="picNull" alt="Errore nel caricamento dell'immagine">
                    <div class="position-absolute top-0 start-25">
                        <h4 v-if="serie.title !== 'Movies'" class="text-light">{{ serie.name }}</h4>
                        <p class="text-light mt-5">originale title: {{ serie.original_title }}</p>
                        <p class="text-light">
                            language: <img :src="getFalg(serie.original_language)" alt="">
                        </p>
                        <p class="text-light">vote: {{ serie.vote_average }}</p>
                    </div>
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

input {
    cursor: pointer;
}
</style>