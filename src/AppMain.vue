<script>
//import
export default {
    data() {
        return {
        };
    },

    //components: {  },
    props: { TVseries: Array },
};
</script>

<template>
    <div class="container">
        <!--  -->
        <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4">
            <div class="col" v-for="serie in TVseries">
                <img src="" alt="">
                <h4 class="text-light">{{ serie.name }}</h4>
                <p class="text-light">originale title: {{ serie.original_name }}</p>
                <p class="text-light">language: ({{ serie.original_language }})</p>
                <p class="text-light">vote: {{ serie.vote_average }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped></style>