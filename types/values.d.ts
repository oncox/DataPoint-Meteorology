interface IReport {
    G:number,
    T:number,
    H:number,
    V:string,
    D:'N'|'NNE'|'NE'|'ENE'|'E'|'ESE'|'SE'|'SSE'|'S'|'SSW'|'SW'|'WSW'|'W'|'WNW'|'NW'|'NNW',
    S:number,
    W:number,
    $:number
    P?:number,
    Pt?:number,
    Dp?:number,    
    F?:number,
    Pp?:number,
    U?:number,  
} 

type IPeriod = {
    type:'Day',
    value:Date,
    Rep:IReport[]
}

interface ISite {
    elevation: number;
    id: number;
    latitude: number;
    longitude: number;
    name: string;
    region?: string;
    unitaryAuthArea?: string;
}  

type IValues = Omit<ISite, 'region'|'unitaryAuthArea'|'id'|'latitude'|'longitude'> & {
    i: number,
    lat: number,
    lon: number,
    Period:IPeriod[]
}


interface IValuesList {
    SiteRep:{
        Wx:{
            Param:{
                name:string,
                units:string,
                $:string
            }[]
        },
        DV:{
            dataDate:Date,
            type:'wxfcs'|'wxobs',
            Location:IValues[]
        }
    }
}

export {
    IReport,
    IPeriod,
    ISite,
    IValues,
    IValuesList
}