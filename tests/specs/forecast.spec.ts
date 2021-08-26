import chai, { expect } from 'chai';
import chaiAsPromised from 'chai-as-promised';
import { describe, before, it } from 'mocha';

import Site from '../../src/models/site';
import Datapoint from '../../src/api/datapoint';
import key from '../mocks/data/key';

chai.use(chaiAsPromised)

describe('Options tests', () => { // the tests container

  it('Test Forecast sitelist function', async ():Promise<void> => {

    const { Forecast } = Datapoint(key);
    const sites:Site[] = await Forecast.sitelist();

    expect(sites).to.be.an('array');

    sites.forEach((site, index) => {
      expect(site instanceof Site, `sites[${index}] is not a Site`).to.be.true;
    });
  }).timeout(5000);

  it('Test Forecast capabilities function', async ():Promise<void> => {

    const { Forecast } = Datapoint(key);
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

    const { Forecast } = Datapoint(key);
    
    await expect(Forecast.values("3hourly", {
      site:new Site({'id':99999999, 'elevation':0, 'latitude':0, 'longitude':0, 'name':'','region':'', 'unitaryAuthArea':''})
    })).to.be.rejectedWith(`Unable to retrieve wxfcs data for site 99999999`)

    await expect(Forecast.values("daily", {
      site:new Site({'id':99999999, 'elevation':0, 'latitude':0, 'longitude':0, 'name':'','region':'', 'unitaryAuthArea':''})
    })).to.be.rejectedWith(`Unable to retrieve wxfcs data for site 99999999`)

  }).timeout(50000);

  it('Test Forecast values function', async ():Promise<void> => {

    const { Forecast } = Datapoint(key);
    
    await expect(Forecast.values("3hourly", {
      site:new Site({'id':14, 'elevation':0, 'latitude':0, 'longitude':0, 'name':'','region':'', 'unitaryAuthArea':''})
    }));



  }).timeout(50000);
});
