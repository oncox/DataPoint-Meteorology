interface IConstants {
  key: string;
  maxDailyRate: number;
  maxRate: number;
  baseURL: string;
}

interface ISite {
  elevation: number;
  id: number;
  latitude: number;
  longitude: number;
  name: string;
  region: string;
  unitaryAuthArea: string;
}

interface IRawSite {
  elevation: string;
  id: string;
  latitude: string;
  longitude: string;
  name: string;
  region: string;
  unitaryAuthArea: string;
}
