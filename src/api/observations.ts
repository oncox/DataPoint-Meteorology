import axios, { AxiosResponse } from 'axios';
import Site from '../models/site';
import constants from '../constants';

export default (key: string): any => ({
  sitelist: (): Promise<Site[]> =>
    new Promise<Site[]>((resolve, reject) => {
      axios
        .get(`${constants.baseURL}/val/wxobs/all/json/sitelist`, {
          params: { key },
        })
        .then((response: AxiosResponse) => {
          const locations: Site[] = response.data.Locations.Location.map((l: IRawSite) => new Site(l));
          resolve(locations);
        })
        .catch((error: Error) => {
          reject(error);
        });
    }),
});
