import Forecast from './forecast';
import Observations from './observations';

export default (key: string, logger?: ILogger): IDatapoint => ({
  Observations: Observations(key, logger),
  Forecast: Forecast(key, logger),
});
