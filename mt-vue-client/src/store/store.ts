import Vue from 'vue';
import Vuex from 'vuex';
import appointmentState from './modules/appointment-list';
import { IAppState } from './states/IAppState';

Vue.use(Vuex);

export default new Vuex.Store<IAppState>({
  modules : {
    appointmentState
  },

});
