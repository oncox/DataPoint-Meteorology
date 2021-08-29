

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





