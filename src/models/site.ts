export default class Site implements ISite {
  elevation: number;

  id: number;

  latitude: number;

  longitude: number;

  name: string;

  region: string;

  unitaryAuthArea: string;

  constructor({ 
    id, 
    elevation, 
    latitude, 
    longitude, 
    name,
    region,
    unitaryAuthArea
  }: ISite) {
    this.elevation = parseFloat(`${elevation}`);
    this.id = parseInt(`${id}`, 10);
    this.latitude = parseFloat(`${latitude}`);
    this.longitude = parseFloat(`${longitude}`);
    this.name = name;
    this.region = region ?? '';
    this.unitaryAuthArea = unitaryAuthArea ?? '';
  }
}
