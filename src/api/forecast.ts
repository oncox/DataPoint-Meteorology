import sitelist from '../common/sitelist';
import capabilities from '../common/capabilities';
import values from '../common/values';
import Site from '../models/site';
import WxfcsReport from '../models/wxfcsreport';
import Record from '../models/record';

export default (key: string, logger?: ILogger): IForecast => ({
  frequencies: ['3hourly', 'daily'],
  sitelist: (): Promise<Site[]> => {
    return sitelist(key, logger, 'wxfcs');
  },
  capabilities: (frequency: ForecastFrequencies = '3hourly'): Promise<Date[]> => {
    return capabilities(key, logger, 'wxfcs', frequency);
  },
  values: (
    { frequency = '3hourly', ...options }: { frequency?: ForecastFrequencies; site?: ISite; time?: Date } = {
      frequency: '3hourly',
    },
  ): Promise<Record<WxfcsReport>[]> => {
    return new Promise((resolve, reject) => {
      values(key, logger, 'wxfcs', frequency, options)
        .then((records) => {
          resolve(
            records.SiteRep.DV.Location.map((location: IValues) => new Record<WxfcsReport>(WxfcsReport, location)),
          );
        })
        .catch(reject);
    });
  },
});
