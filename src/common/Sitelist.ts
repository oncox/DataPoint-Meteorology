import axios, { AxiosResponse } from 'axios';
import Site from '../models/site';
import constants from './constants';
import { ILogger, ISiteList, ISite } from '../../types';

export default (key: string, logger: ILogger | undefined, type: 'wxobs' | 'wxfcs'): Promise<Site[]> => {
  return new Promise<Site[]>((resolve, reject) => {
    if (logger) {
      logger.info(`Requesting sites from ${constants.baseURL}/val/${type}/all/json/sitelist`);
    }

    axios
      .get<ISiteList>(`${constants.baseURL}/val/${type}/all/json/sitelist`, {
        params: { key },
      })
      .then((response: AxiosResponse<ISiteList>) => {
        const locations: Site[] = response.data.Locations.Location.map((rawSite: ISite) => new Site(rawSite));
        resolve(locations);
      })
      .catch((error: Error) => {
        reject(error);
      });
  });
};
