import Report from './report';
import Site from './site';

export default class Record<T extends Report> extends Site {
  country: string;

  continent: string;

  Period: T[];

  constructor(Type: new (startDate: Date, element: IReport) => T, values: IValues) {
    super({ id: values.i, latitude: values.lat, longitude: values.lon, ...values });

    this.country = values.country;
    this.continent = values.continent;
    this.Period = values.Period.map((period: IPeriod) => {
      return period.Rep.map((report: IReport) => {
        return new Type(new Date(period.value), report);
      });
    }).flat();
  }
}
