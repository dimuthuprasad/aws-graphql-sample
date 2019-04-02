import { GetterTree } from 'vuex';
import { IAppointmentState } from '@/store/states/IAppointmentState';
import { IAppointment } from '@/models/IAppointment';
import { IAppState } from '../states/IAppState';

export const getters: GetterTree<IAppointmentState, IAppState> = {
  appointments(state): IAppointment[] {
    return  state.appointments;
  },

  isLoading(state): boolean {
    return  state.isLoading;
  },
};
