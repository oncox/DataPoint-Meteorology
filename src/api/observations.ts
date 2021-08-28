import sitelist from '../common/sitelist';
import capabilities from '../common/capabilities';
import values from '../common/values';
import Site from '../models/site';
import WxobsReport from '../models/wxobsreport';
import Record from '../models/record';

export default (key: string): IObservations => ({
  frequencies: ['hourly'],
  sitelist: (): Promise<Site[]> => {
    return sitelist(key, 'wxobs');
  },
  capabilities: (frequency: ObsFrequencies = 'hourly'): Promise<Date[]> => {
    return capabilities(key, 'wxobs', frequency);
  },
  values: (frequency: ObsFrequencies, options?: { site?: ISite; time?: Date }): Promise<Record<WxobsReport>[]> => {
    return new Promise((resolve, reject) => {
      values(key, 'wxobs', frequency, options)
        .then((records) => {
          resolve(records.SiteRep.DV.Location.map((location: any) => new Record<WxobsReport>(WxobsReport, location)));
        })
        .catch(reject);
    });
  },
});
