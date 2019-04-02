import { IAppointment } from '@/models/IAppointment';
import axios, { AxiosPromise } from 'axios';

const appointmentListDataService: IAppointmentListDataService = {
  async getAppointments(): Promise<IAppointment[]> {
    const promise = new Promise<IAppointment[]>((resolve, reject) => {
      axios
        .post(
          `https://d8db8q3b0l.execute-api.us-east-1.amazonaws.com/dev/products`,
          `query {
                  listProducts {
                    name,
                    addedAt
                  }
                }`
        )
        .then(
          (appointmentResponse) => {
            resolve(appointmentResponse.data.data.listProducts);
          },
          (err) => reject(err)
        );
    });

    return promise;
  }
};

export interface IAppointmentListDataService {
  getAppointments(): Promise<IAppointment[]>;
}

export default appointmentListDataService;
