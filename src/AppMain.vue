<script>
import { store } from "./data/store";
import BaseCard from "./components/BaseCard.vue";

export default {
    data() {
        return {
            store,
        };
    },

    components: { BaseCard },
    props: { TVmovies: Array, pic: String },

};
</script>

<template>
    <div class="container">
        <!--  -->
        <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4">
            <div class="col mt-3" v-for="movie in TVmovies">
                <BaseCard :title="movie.title" :originalTitle="movie.original_title" :lang="movie.original_language"
                    :vote="movie.vote_average" />
            </div>
        </div>
    </div>
</template>

<style scoped></style>