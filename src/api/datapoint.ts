import Forecast from './forecast';
import Observations from './observations';

// TODO add the ability to pass in a logging instance

export default (key: string, logger?: ILogger): IDatapoint => ({
  Observations: Observations(key, logger),
  Forecast: Forecast(key, logger),
});
