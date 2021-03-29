const mutations = {
    toggleLoading(state, payload = null) {
        if (payload) {
            state.loading = payload;
        }else{
            state.loading = !state.loading;
        }

    }
};

export default mutations;