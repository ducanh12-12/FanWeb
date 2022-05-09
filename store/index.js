export const state = () => ({
  user: [],
  ann:[]
})
export const getters = {
    getAnn (state) {
        return state.ann
    }
}
export const mutations = {
  hanldeRegister(state, payload) {
    state.ann = payload
  },
}
export const actions = {
    async hanldeRegister(context) {
        const arr = await this.$axios.get('https://jsonplaceholder.typicode.com/posts')
        context.commit('hanldeRegister',arr.data)
    }
}