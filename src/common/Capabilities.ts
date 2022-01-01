import axios, { AxiosResponse } from 'axios';
import constants from './Constants';
import { ILogger, Datatype, ObsFrequencies, ForecastFrequencies, ICapabilities } from '../../types';

export default (
  key: string,
  logger: ILogger | undefined,
  type: Datatype,
  frequency: ObsFrequencies | ForecastFrequencies,
): Promise<any> => {
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
