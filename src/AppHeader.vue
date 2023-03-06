<script>
//import
export default {
    data() {
        return {
            term: "",
        };
    },

    //components: {},
    props: {
        placeholder: String,
        title: String,
    },

    emits: ["on-search"],

    methods: {
        clear() {
            this.term = "";
        },
        search() {
            this.$emit("on-search", this.term);
        },
    },
};
</script>

<template>
    <div class="container d-flex justify-content-between align-items-center">
        <h1>
            <a class="text-danger fw-bold" href="">
                {{ title }}
            </a>
        </h1>
        <form @submit.prevent="">
            <nav class="input-group d-flex">
                <input type="text" class="form-control" :placeholder="placeholder || 'cerca...'" v-model="term" />
                <button class="btn btn-outline-success" type="button" @click="search">Cerca</button>
                <button class="btn btn-outline-danger" type="button" @click="clear">Reset</button>
            </nav>
        </form>
    </div>
</template>

<style scoped>
a {
    text-decoration: none;
}
</style>