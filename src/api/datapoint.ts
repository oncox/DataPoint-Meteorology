import Forecast from './forecast';
import Observations from './observations';

export default (key: string): IDatapoint => ({
  Observations: Observations(key),
  Forecast: Forecast(key),
});
