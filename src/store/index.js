import Vue from 'vue';
import {AuthModule} from './modules/auth_module';
import Vuex from 'vuex';
Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        auth: AuthModule
    }
});
