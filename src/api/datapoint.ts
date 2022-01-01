import Forecast from './forecast';
import Observations from './observations';
import { ILogger, IDatapoint } from '../../types';

export default (key: string, logger?: ILogger): IDatapoint => ({
  Observations: Observations(key, logger),
  Forecast: Forecast(key, logger),
});
