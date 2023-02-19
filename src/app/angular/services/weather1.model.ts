  // 自動分析 json -> 宣告
  // https://transform.tools/json-to-typescript
  export interface Root {
    id: string
    type: string
    geometry: Geometry
    properties: Properties
  }
  
  export interface Geometry {
    type: string
    coordinates: number[]
  }
  
  export interface Properties {
    "@id": string
    "@type": string
    cwa: string
    forecastOffice: string
    gridId: string
    gridX: number
    gridY: number
    forecast: string
    forecastHourly: string
    forecastGridData: string
    observationStations: string
    relativeLocation: RelativeLocation
    forecastZone: string
    county: string
    fireWeatherZone: string
    timeZone: string
    radarStation: string
  }
  
  export interface RelativeLocation {
    type: string
    geometry: Geometry2
    properties: Properties2
  }
  
  export interface Geometry2 {
    type: string
    coordinates: number[]
  }
  
  export interface Properties2 {
    city: string
    state: string
    distance: Distance
    bearing: Bearing
  }
  
  export interface Distance {
    unitCode: string
    value: number
  }
  
  export interface Bearing {
    unitCode: string
    value: number
  }  


export interface Status {
    status : string;
}


// 必須大寫, 不然報錯
export interface Error {
    correlationId : string; //"1e2c4f",
    parameterErrors: //Param[],
      { 
        parameter: string; //parameter: string; // "path.point",
        message:  string; //message:  string; //"Does not match the regex pattern ^(-?\\d+(?:\\.\\d+)?),(-?\\d+(?:\\.\\d+)?)$"
      }[],
    title: string; //"Not Found",
    type: string; // "https://api.weather.gov/problems/NotFound",
    status: number; // 404,
    detail: string; //"Not Found",
    instance: string; //"https://api.weather.gov/requests/1e2c4f"
}