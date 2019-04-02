import { Module } from 'vuex';
import { actions } from '../actions/appointment-list.actions';
import { mutations } from '../mutations/appointment-list.mutations';
import { getters } from '../getters/appointment-list.getters';
import { IAppointmentState } from '../states/IAppointmentState';
import { IAppState } from '../states/IAppState';

export const state: IAppointmentState = {
  appointments: [],
  isLoading: false,
};

const namespaced: boolean = true;

const appointmentState: Module<IAppointmentState, IAppState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};

export default appointmentState;
