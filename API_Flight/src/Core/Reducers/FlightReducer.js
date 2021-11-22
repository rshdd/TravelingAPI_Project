import createReducer from "../../Utils/CreateReducerUtils";
import {
  ERROR_SEARCH, GET_AIRLINES,
  GET_AIRPORTS, GET_FLIGHTS_FROM_A_TO_R, GET_TRAVELS,
  STORED_AIRLINES,
  STORED_AIRPORTS,
  STORED_FLIGHTS_FROM_A_TO_R
} from "../Constants/FlightConstants";


const getAirports = (draft, action) => {
  draft.fetching = true
};

const storedFlights = (draft, action) => {
  draft.fetching = false;
  draft.airportList = action.data;
};


const errorSearch = (draft, action) => {
  draft.error = action.error;
};

const getFlightsFromAToR = (draft, action) => {
  draft.fetching = true
};

const StoredFlightsFromAtoR = (draft, action) => {
  draft.fetching = false
  draft.flyerList = action.data;
};


const getAirlines = (draft, action) => {
  draft.fetching = true
};

const StoredAirlines = (draft, action) => {
  draft.fetching = false
  draft.airlines = action.data;
};

const getTravels = (draft, action) => {
   draft.travels = action.travels;
};

const initState = {
  fetching: false,
  error: '',
  airportList: [],
  flyerList: [], 
  airlines: [],  
  travels: []  

};

export default createReducer({
  [GET_AIRPORTS]: getAirports,
  [STORED_AIRPORTS]: storedFlights,
  [ERROR_SEARCH]: errorSearch,
  [GET_FLIGHTS_FROM_A_TO_R]: getFlightsFromAToR,
  [STORED_FLIGHTS_FROM_A_TO_R]: StoredFlightsFromAtoR,
  [GET_AIRLINES]: getAirlines,
  [STORED_AIRLINES]: StoredAirlines,
  [GET_TRAVELS]: getTravels,
}, initState);
