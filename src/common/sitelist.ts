import axios, { AxiosResponse } from 'axios';
import Site from '../models/site';
import constants from './constants';

export default (key: string, type: 'wxobs' | 'wxfcs'): Promise<Site[]> => {
  return new Promise<Site[]>((resolve, reject) => {
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
