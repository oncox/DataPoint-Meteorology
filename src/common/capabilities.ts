import axios, { AxiosResponse } from 'axios';
import constants from './constants';

export default (key: string, type: Datatype, frequency: ObsFrequencies | ForecastFrequencies): Promise<any> => {
  return new Promise<Date[]>((resolve, reject) => {
    axios
      .get<ICapabilities>(`${constants.baseURL}/val/${type}/all/json/capabilities`, {
        params: { key, res: frequency },
      })
      .then((response: AxiosResponse<ICapabilities>) => {
        const timeSteps = response.data.Resource.TimeSteps.TS.map((timeStep: string) => new Date(timeStep));

        resolve(timeSteps);
      })
      .catch((error: Error) => {
        reject(error);
      });
  });
};
