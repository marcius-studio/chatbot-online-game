export default {
    state: {
        show: true,
    },
    mutations: {
        toggleIntro(state) {
            state.show = !state.show
        },
    },
}