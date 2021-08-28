import Forecast from './forecast';
import Observations from './observations';

// TODO add the ability to pass in a logging instance

export default (key: string): IDatapoint => ({
  Observations: Observations(key),
  Forecast: Forecast(key),
});
