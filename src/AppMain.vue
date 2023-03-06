<script>
//import AppHeader from './AppHeader.vue';
export default {
    data() {
        return {
        };
    },

    //components: {  },
};
</script>

<template>
    <div class="container">
        <input v-model="search" placeholder="cerca il tuo film">
        <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4">
            <div class="col" v-for="serie in series">
                <img src="" alt="">
                <h4>{{ serie.name }}</h4>
                <p class="">originale name: {{ serie.original_name }}</p>
                <p>language: ({{ serie.original_language }})</p>
                <p>vote: {{ serie.vote_average }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped></style>