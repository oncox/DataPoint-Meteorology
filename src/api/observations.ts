import sitelist from '../common/sitelist';
import capabilities from '../common/capabilities';
import values from '../common/values';
import Site from '../models/site';
import WxobsReport from '../models/wxobsreport';
import Record from '../models/record';

export default (key: string, logger?: ILogger): IObservations => ({
  frequencies: ['hourly'],
  sitelist: (): Promise<Site[]> => {
    return sitelist(key, logger, 'wxobs');
  },
  capabilities: (): Promise<Date[]> => {
    return capabilities(key, logger, 'wxobs', 'hourly');
  },
  values: (options?: { site?: ISite; time?: Date }): Promise<Record<WxobsReport>[]> => {
    return new Promise((resolve, reject) => {
      values(key, logger, 'wxobs', 'hourly', options)
        .then((records) => {
          resolve(
            records.SiteRep.DV.Location.map((location: IValues) => new Record<WxobsReport>(WxobsReport, location)),
          );
        })
        .catch(reject);
    });
  },
});
