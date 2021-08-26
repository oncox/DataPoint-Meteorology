const capabilitiesMockData = (frequency:ObsFrequencies|ForecastFrequencies, datatype:Datatype) :any => {

    return {
        "Resource":{
          "res": frequency,
          "type": datatype,
          "TimeSteps":{
            "TS":[
              "2000-01-01T00:00:00Z"
            ]
          }
        }
      }
}
export default capabilitiesMockData;