import axios, { AxiosResponse } from 'axios';
import constants from './constants';

export default (
  key: string,
  type: Datatype,
  frequency: ObsFrequencies | ForecastFrequencies,
  options?: { site?: ISite; time?: Date },
): Promise<IValuesList> => {
  return new Promise<IValuesList>((resolve, reject) => {
    const id: String = options?.site?.id.toString() ?? 'all';

    axios
      .get<IValuesList>(`${constants.baseURL}/val/${type}/all/json/${id}`, {
        params: { key, res: frequency, time: options?.time },
      })
      .then((response: AxiosResponse<IValuesList>) => {
        if (typeof response.data.SiteRep.DV.Location === 'undefined') {
          throw new Error(`Unable to retrieve ${type} data for site ${id}`);
        }

        response.data.SiteRep.DV.Location = [response.data.SiteRep.DV.Location].flat();

        response.data.SiteRep.DV.Location = response.data.SiteRep.DV.Location.map((rawLocation: IValues) => {
          const location: IValues = { ...rawLocation };
          location.Period = [location.Period].flat();
          location.Period = location.Period.map((rawPeriod: IPeriod) => {
            const period: IPeriod = { ...rawPeriod };
            period.Rep = [period.Rep].flat();

            return period;
          });

          return location;
        });

        resolve(response.data);
      })
      .catch(reject);
  });
};
