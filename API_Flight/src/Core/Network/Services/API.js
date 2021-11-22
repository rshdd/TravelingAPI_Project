import axios from "axios";

const token = '1|MN9ruQV0MFEsgOzMo8crw8gB575rsTe2H5U1y2Lj';

const getAirports = () => {
  return axios({
    method: 'get',
    url: 'https://recruitment.shippypro.com/flight-engine/api/airports/all',
    headers: {Authorization: `Bearer ${token}`}
  });
};

const getFlightsFromAToR = (departureIATA, arrivalIATA) => {
  console.log('departureIATA, arrivalIATA',departureIATA, arrivalIATA)
  return axios({
    method: 'get',
    url: `https://recruitment.shippypro.com/flight-engine/api/flights/from/${departureIATA}/to/${arrivalIATA}`,
    headers: {Authorization: `Bearer ${token}`}
  });
};

const getAirlines = () => {
  return axios({
    method: 'get',
    url: 'https://recruitment.shippypro.com/flight-engine/api/airlines/all',
    headers: {Authorization: `Bearer ${token}`}
  });
};

export const Services = {
  getAirports,
  getFlightsFromAToR,
  getAirlines
}