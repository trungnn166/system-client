import {AuthState} from '../states/auth_state';
import {AuthMutations} from '../mutations/auth_mutations';
import {AuthActions} from '../actions/auth_action';

export const AuthModule = {
    namespaced: true,
    state: AuthState,
    mutations: AuthMutations,
    actions: AuthActions,
    getters: {

    }
}