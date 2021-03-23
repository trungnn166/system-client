export const AuthActions = {
    login({commit}, userLogin) {
        
        commit('loginSuccess', userLogin);
    },
    logout({commit}) {
        commit('logout');
    }
}