<script>
export default {
    props: {
        title: String,
        originalTitle: String,
        lang: String,
        vote: Number,
    },

    methods: {
        getFalg(country) {
            country = country.toUpperCase();

            if (country == "EN") return "https://flagsapi.com/GB/flat/24.png";
            if (country == "JA") return "https://flagsapi.com/JP/flat/24.png";
            return "https://flagsapi.com/" + country + "/flat/24.png";
        },
    },
}
</script>

<template>
    <div class="col">
        <img class="img-fluid" :src="pic + movie.poster_path" alt="">
        <h4 v-if="movie.title !== 'Movies'" class="text-light">{{ title }}</h4>
        <p class="text-light">originale title: {{ originalTitle }}</p>
        <p class="text-light">
            language: ()
            <img :src="getFalg(lang)" alt="">
        </p>
        <p class="text-light">vote: {{ vote }}</p>
    </div>
</template>