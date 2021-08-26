export class Report {
    G:number;
    T:number;
    H:number;
    V:string;
    D:'N'|'NNE'|'NE'|'ENE'|'E'|'ESE'|'SE'|'SSE'|'S'|'SSW'|'SW'|'WSW'|'W'|'WNW'|'NW'|'NNW';
    S:number;
    W:number;
    date:Date;

    constructor(startDate:Date, {G, T, H, V, D, S, W, $}:IReport) {
        this.G = parseFloat(`${G}`);
        this.T = parseFloat(`${T}`);
        this.H = parseFloat(`${H}`);
        this.V = V;
        this.D = D;
        this.S = parseFloat(`${S}`);
        this.W = parseFloat(`${W}`);
        this.date = new Date(startDate.getTime() + $*60000);
    }
}
  
export class WxfcsReport extends Report {
    F:number;
    Pp:number;
    U:number;
  
    constructor(startDate:Date, {F, Pp, U, ...report}:IReport) {
      super(startDate, report);
  
      this.F = parseFloat(`${F ?? 'NaN'}`);
      this.Pp = parseFloat(`${Pp ?? 'NaN'}`);
      this.U = parseFloat(`${U ?? 'NaN'}`);
    }
}
  
export class WxobsReport extends Report {
    P:number;
    Pt:number;
    Dp:number;
  
    constructor(startDate:Date, {P, Pt, Dp, ...report}:IReport) {
      super(startDate, report);
  
      this.P = parseFloat(`${P ?? 'NaN'}`);
      this.Pt = parseFloat(`${Pt ?? 'NaN'}`);
      this.Dp = parseFloat(`${Dp ?? 'NaN'}`);
    }
}