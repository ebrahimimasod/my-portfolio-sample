import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);


import LoadingState from './Modules/Loading'

const store = new Vuex.Store({
    modules: {
        LoadingState
    }
});

export default store;