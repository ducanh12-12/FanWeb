export const state = () => ({
    user:[],
  })
export const mutations = {
    hanldeRegister(state,payload) {
        state.user.push(payload)
    }
}