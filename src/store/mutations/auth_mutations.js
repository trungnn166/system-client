
export const AuthMutations = {
    LOGIN_SUCCESS(state, userLogin) {
        state.isLogin = true,
        state.userLogin = userLogin;
    },

    LOGOUT(state) {
        state.isLogin = false;
        state.userLogin = {};
    },

    LOGIN_FAIL(state) {
        state.isLoginFail = true;
    }
}