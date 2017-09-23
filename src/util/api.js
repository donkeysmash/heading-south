import response from './db';

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

export const fetchStationInfo = name => delay(500).then(() => response);
