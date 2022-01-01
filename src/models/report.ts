import { IReport } from '../../types';

export default class Report {
  G: number;

  T: number;

  H: number;

  V: string;

  D: 'N' | 'NNE' | 'NE' | 'ENE' | 'E' | 'ESE' | 'SE' | 'SSE' | 'S' | 'SSW' | 'SW' | 'WSW' | 'W' | 'WNW' | 'NW' | 'NNW';

  S: number;

  W: number;

  date: Date;

  constructor(startDate: Date, { G, T, H, V, D, S, W, $ }: IReport) {
    this.G = parseFloat(`${G}`);
    this.T = parseFloat(`${T}`);
    this.H = parseFloat(`${H}`);
    this.V = V;
    this.D = D;
    this.S = parseFloat(`${S}`);
    this.W = parseFloat(`${W}`);
    this.date = new Date(startDate.getTime() + $ * 60000);
  }
}
