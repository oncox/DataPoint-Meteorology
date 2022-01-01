import chai, { expect } from 'chai';
import chaiAsPromised from 'chai-as-promised';
import { describe, before, it } from 'mocha';
import winston from 'winston';

import Site from '../../src/models/Site';
import Datapoint from '../../src/api/Datapoint';
import key from '../mocks/data/key';

chai.use(chaiAsPromised)

let logger:any;

describe('Options tests', () => { // the tests container

  before(() => {
    logger = winston.createLogger({
      transports: [new winston.transports.Console()]
    })
  })

  it('Test Forecast sitelist function', async ():Promise<void> => {

    const { Forecast } = Datapoint(key, logger);
    const sites:Site[] = await Forecast.sitelist();

    expect(sites).to.be.an('array');

    sites.forEach((site, index) => {
      expect(site instanceof Site, `sites[${index}] is not a Site`).to.be.true;
    });
  }).timeout(5000);

  it('Test Forecast capabilities function', async ():Promise<void> => {

    const { Forecast } = Datapoint(key, logger);
    let timeSteps:Date[]

    for (var item in Forecast.frequencies) {
      timeSteps = await Forecast.capabilities(Forecast.frequencies[item]);

      expect(timeSteps).to.be.an('array');

      timeSteps.forEach((timeStep, index) => {
        expect(timeStep instanceof Date, `timeSteps[${index}] is not a Date`).to.be.true;
      });
    }
  });

  it('Test Forecast values function for a null site', async ():Promise<void> => {

    const { Forecast } = Datapoint(key, logger);
    
    await expect(Forecast.values({
      frequency:"3hourly",
      site:new Site({'id':99999999, 'elevation':0, 'latitude':0, 'longitude':0, 'name':''})
    })).to.be.rejectedWith(`Unable to retrieve wxfcs data for site 99999999`)

    await expect(Forecast.values({
      frequency:"daily",
      site:new Site({'id':99999999, 'elevation':0, 'latitude':0, 'longitude':0, 'name':''})
    })).to.be.rejectedWith(`Unable to retrieve wxfcs data for site 99999999`)

  }).timeout(50000);

  it('Test Forecast values function', async ():Promise<void> => {

    const { Forecast } = Datapoint(key, logger);
    
    await expect(Forecast.values({
      frequency:"3hourly",
      site:new Site({'id':14, 'elevation':0, 'latitude':0, 'longitude':0, 'name':''})
    }));

  }).timeout(50000);
});
