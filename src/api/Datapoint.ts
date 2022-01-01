import Forecast from './Forecast';
import Observations from './Observations';
import { ILogger, IDatapoint } from '../../types';

export default (key: string, logger?: ILogger): IDatapoint => ({
  Observations: Observations(key, logger),
  Forecast: Forecast(key, logger),
});
