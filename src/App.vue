<template>
    <div id="app">
        <Loader v-if="isLoadingShow"/>
        <HomePage/>
    </div>
</template>

<script>
    import HomePage from "./pages/Home/index";
    import Loader from "./components/Loader";
    import {mapGetters} from "vuex";

    export default {
        name: "App",
        components: {HomePage, Loader},
        computed: {
            ...mapGetters(['isLoadingShow'])
        }
    };
</script>

<style>
</style>
