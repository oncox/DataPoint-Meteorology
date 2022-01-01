import {ISite} from './values'

type Datatype = 'wxobs' | 'wxfcs';
type ObsFrequencies = 'hourly';
type ForecastFrequencies = '3hourly' | 'daily';


interface ICapabilities {
  Resource:{
    res: ObsFrequencies|ForecastFrequencies,
    type: Datatype,
    TimeSteps:{
      TS:string[]
    }
  }
}

interface ISiteList { 
  Locations: {
      Location: ISite[] 
  }
}

interface ILogger {
  info:(msg:string) => void, 
  error:(msg:string) => void, 
  warn:(msg:string) => void
}

export {
  Datatype,
  ObsFrequencies,
  ForecastFrequencies,
  ICapabilities,
  ISiteList,
  ILogger
}





