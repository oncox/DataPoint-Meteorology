import MockAdapter from 'axios-mock-adapter';
import { expect } from 'chai';
import { describe, before, it } from 'mocha';

import axios from 'axios';

import constants from '../src/constants';
import Site from '../src/models/site';
import Datapoint from '../src/api/datapoint';

const locations:any = {
  Locations: {
    Location: [
      {
        elevation: '0.0', id: '1', latitude: '50', longitude: '0', name: 'Site A', region: 'Region 1', unitaryAuthArea: 'Area 1',
      },
      {
        elevation: '1.0', id: '2', latitude: '51', longitude: '1', name: 'Site B', region: 'Region 2', unitaryAuthArea: 'Area 2',
      },
      {
        elevation: '2.0', id: '3', latitude: '52', longitude: '2', name: 'Site C', region: 'Region 3', unitaryAuthArea: 'Area 3',
      },
    ],
  },
};

describe('Options tests', () => { // the tests container
  let mock: MockAdapter;

  before(() => {
    mock = new MockAdapter(axios);

    mock.onGet(`${constants.baseURL}/val/wxobs/all/json/sitelist`,
      {
        params: { key: constants.key },
      })
      .reply(200, locations);
  });

  it('Test getSites function', async ():Promise<void> => {
    const { Observations } = Datapoint(constants.key);
    const sites:Site[] = await Observations.sitelist();

    expect(sites).to.be.an('array');

    sites.forEach((site, index) => {
      expect(site instanceof Site, `sites[${index}] is not a Site`).to.be.true;
    });
  });
});
