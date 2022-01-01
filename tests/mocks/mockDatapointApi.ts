import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';

import constants from '../../src/common/Constants';
import locations from './data/locations';
import capabilitiesMockData from './data/capabilitiesMockData';
import nullSiteMockData from './data/nullSiteMockData';
import singleSiteAllTimesMockData from './data/singleSiteAllTimesMockData';
import singleSiteObsAllTimesMockData from './data/singleSiteObsAllTimesMockData';

import key from './data/key';

let mock: MockAdapter= new MockAdapter(axios);

mock.onGet(`${constants.baseURL}/val/wxobs/all/json/sitelist`,
{
    params: { key: key },
})
.reply(200, locations);

mock.onGet(`${constants.baseURL}/val/wxfcs/all/json/sitelist`,
{
  params: { key: key },
})
.reply(200, locations);

mock.onGet(`${constants.baseURL}/val/wxobs/all/json/capabilities`,
{
    params: { key: key, res: 'hourly' },
})
.reply(200, capabilitiesMockData("hourly", "wxobs"));

mock.onGet(`${constants.baseURL}/val/wxfcs/all/json/capabilities`,
{
  params: { key: key, res: '3hourly' },
})
.reply(200, capabilitiesMockData('3hourly', 'wxfcs'));

mock.onGet(`${constants.baseURL}/val/wxfcs/all/json/capabilities`,
{
  params: { key: key, res: 'daily' },
})
.reply(200, capabilitiesMockData('daily', 'wxfcs'));

mock.onGet(`${constants.baseURL}/val/wxfcs/all/json/99999999`,
{
  params: { key: key, res: 'daily', time:undefined },
})
.reply(200, nullSiteMockData);

mock.onGet(`${constants.baseURL}/val/wxfcs/all/json/99999999`,
{
  params: { key: key, res: '3hourly', time:undefined },
})
.reply(200, nullSiteMockData);

mock.onGet(`${constants.baseURL}/val/wxobs/all/json/99999999`,
{
  params: { key: key, res: 'hourly', time:undefined },
})
.reply(200, nullSiteMockData);

mock.onGet(`${constants.baseURL}/val/wxfcs/all/json/14`,
{
  params: { key: key, res: '3hourly', time:undefined },
})
.reply(200, singleSiteAllTimesMockData);

mock.onGet(`${constants.baseURL}/val/wxobs/all/json/99142`,
{
  params: { key: key, res: 'hourly', time:undefined },
})
.reply(200, singleSiteObsAllTimesMockData);


export default mock;