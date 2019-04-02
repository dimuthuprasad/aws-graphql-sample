import { MutationTree } from 'vuex';
import { IAppointmentState } from '@/store/states/IAppointmentState';
import { IAppointment } from '@/models/IAppointment';

export const mutations: MutationTree<IAppointmentState> = {
  LOAD_APPOINTMENTS_SUCCESS(state, payload: IAppointment[]) {
    state.appointments = payload;
    state.isLoading = false;
  },
  LOAD_APPOINTMENTS_ERROR(state) {
    state.isLoading = false;
  },

  SET_LOADING(state, payload: boolean) {
    state.isLoading = payload;
  }
};
