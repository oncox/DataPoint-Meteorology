interface IConstants {
    key: string;
    maxDailyRate: number;
    maxRate: number;
    baseURL: string;
  }
  
interface IObservations {
    frequencies: Array<ObsFrequencies>;
    sitelist: () => Promise<ISite[]>;
    capabilities: (frequency:ObsFrequencies) => Promise<Date[]>;
    values: (options?:{site?:ISite, time?:Date}) => Promise<any>;
  }
  
  interface IForecast {
    frequencies: Array<ForecastFrequencies>;
    sitelist: () => Promise<ISite[]>;
    capabilities: (frequency:ForecastFrequencies) => Promise<Date[]>;
    values: (options?:{frequency?:ForecastFrequencies, site?:ISite, time?:Date}) => Promise<any>;
  }
  
  interface IDatapoint {
    Observations: IObservations;
    Forecast: IForecast;
  }
  