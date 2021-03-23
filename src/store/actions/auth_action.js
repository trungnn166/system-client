import * as AuthApi from '../../api/authApi';
import router from '../../router/index';
import * as Constants from '../../helper/constants';

export const AuthActions = {
    login({commit}, info) {
        AuthApi.login(info)
            .then((userLogin) => {
                    commit('LOGIN_SUCCESS', userLogin);
                    router.push('dashboard');
                },
            )
            .catch(() => {
                commit('LOGIN_FAIL');
            })
    },

    fetchUserLogin({commit}) {
        const token = localStorage.getItem(Constants.JWT_TOKEN);
        if(token == null) return;
        AuthApi.getUserLogin()
            .then((res) => {
                commit('LOGIN_SUCCESS', res.data);
            })
    },

    logout({commit}) {
        commit('logout');
    }
}