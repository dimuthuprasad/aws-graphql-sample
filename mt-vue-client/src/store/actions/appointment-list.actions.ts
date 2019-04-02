import { ActionTree, Action } from 'vuex';
import axios from 'axios';
import { IAppointmentState } from '@/store/states/IAppointmentState';
import { IAppointment } from '@/models/IAppointment';
import { IAppState } from '../states/IAppState';
import appointmentListDataService from '../services/appointment-data.service';

const LOAD_APPOINTMENTS = 'LOAD_APPOINTMENTS';
const LOAD_APPOINTMENTS_SUCCESS = 'LOAD_APPOINTMENTS_SUCCESS';
const LOAD_APPOINTMENTS_ERROR = 'LOAD_APPOINTMENTS_ERROR';

const SET_LOADING = 'SET_LOADING';

export class FetchAppointmentsSuccess {
  public readonly type = LOAD_APPOINTMENTS;
  constructor(public payload: IAppointment[]) {}
}

export const actions: ActionTree<IAppointmentState, IAppState> = {
  fetchAppointments({ commit }): any {
    commit(SET_LOADING, true);

    appointmentListDataService.getAppointments().then((apps) => {
      commit(LOAD_APPOINTMENTS_SUCCESS, apps);
    });
  }
};
