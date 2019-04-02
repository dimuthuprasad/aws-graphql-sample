import { IAppointment } from '@/models/IAppointment';

export interface IAppointmentState {
    appointments: IAppointment[];
    isLoading: boolean;
}
