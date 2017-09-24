import fetchJsonp from 'fetch-jsonp';

export const fetchStationInfo = name => {
  return fetchJsonp(`http://myttc.ca/${name}.json`).then(response => response.json());
};
