import Report from './report';
import { IReport } from '../../types';

export default class WxobsReport extends Report {
  P: number;

  Pt: number;

  Dp: number;

  constructor(startDate: Date, { P, Pt, Dp, ...report }: IReport) {
    super(startDate, report);

    this.P = parseFloat(`${P ?? 'NaN'}`);
    this.Pt = parseFloat(`${Pt ?? 'NaN'}`);
    this.Dp = parseFloat(`${Dp ?? 'NaN'}`);
  }
}
