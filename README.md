# Met Office Datapoint
A JavaScript module for accessing weather data via the [Met Office](http://www.metoffice.gov.uk/)'s legacy open data API known as [DataPoint](http://www.metoffice.gov.uk/datapoint).

**Disclaimer: This module is in no way part of the DataPoint service or otherwise affiliated with the Met Office in any way**

## Features

* Retrieve a list of sites providing observations 
* Retrieve a list of timesteps that observations are available for
* Retrieve observation data for site(s) 
* Retrieve a list of sites that forecast data is avaialble for 
* Retrieve a list of timesteps that forecast data is available for
* Retrieve forecast data for site(s) 



## Installation

The module can be directly installed via npm or yarn, e.g.

```bash
npm install metoffice-datapoint
```



## Usage

The module needs to be instantiated with an API key from [Met Office DataPoint](https://register.metoffice.gov.uk/WaveRegistrationClient/public/register.do?service=datapoint).  

```javascript
const datapoint = require('metoffice-datapoint')
const apiKey = '01234567-89ab-cdef-ghij-klmnopqrstuv' // API Key
{Observations, Forecasts} = datapoint(apiKey)
```

The module can additionally be instantiated with a logging object to produce logging messages.  The logging object is expected to contain methods for error, warn, info, trace, and debug (i.e. winston, log4js, ...)

```javascript
const winston = require('winston')
logger = winston.createLogger({
  transports: [new winston.transports.Console()]
})

{Observations, Forecasts} = datapoint(apiKey, logger)
```

 ### Observations

#### Sitelist

```javascript
Observations.sitelist()
.then((sites) => {
	console.log(sites)
})
```

#### Capabilities

```javascript
Observations.capabilities()
.then((timestep) => {
	console.log(timestep) // Timesteps are Date objects
})
```

#### Values

```javascript
Observations.values()
.then((reports) => {
	console.log(reports)
})
```



### Forecasts

#### Sitelist

```javascript
Forecast.sitelist()
.then((sites) => {
	console.log(sites)
})
```

#### Capabilities

```javascript
Forecast.capabilities()
.then((timestep) => {
	console.log(timestep) // Timesteps are Date objects
})
```

#### Values

```javascript
Forecast.values()
.then((reports) => {
	console.log(reports)
})
```





