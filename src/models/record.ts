import Report from './report';
import Site from './site';
import { IValues, IReport, IPeriod } from '../../types';

export default class Record<T extends Report> extends Site {
  Period: T[];

  constructor(Type: new (startDate: Date, element: IReport) => T, values: IValues) {
    super({ id: values.i, latitude: values.lat, longitude: values.lon, ...values });

    this.Period = values.Period.map((period: IPeriod) => {
      return period.Rep.map((report: IReport) => {
        return new Type(new Date(period.value), report);
      });
    }).flat();
  }
}
