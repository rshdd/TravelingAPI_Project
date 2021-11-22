import {createLogic} from "redux-logic";
import {
  ERROR_SEARCH, GET_AIRLINES,
  GET_AIRPORTS, GET_FLIGHTS_FROM_A_TO_R, GET_TRAVELS,
  ON_CLICK_SEARCH,
  REJECT_SEARCH, STORED_AIRLINES,
  STORED_AIRPORTS, STORED_FLIGHTS_FROM_A_TO_R
} from "../Constants/FlightConstants";
import {Services} from "../Network/Services/API";
import {HTTP_CODE_STATUS_SUCCESS} from "../Constants/NetworkConstants";
import {
  errorSearch,
  getFlightsFromAtoR,
  storedAirlines,
  storedAirports,
  storedFlightsFromAtoR
} from "../Actions/FlightActions";
import {getTravel} from "../../Utils/FlightUtils";

const GetAirportsManager = createLogic({
  type: [GET_AIRPORTS],
  async process({action, getState}, dispatch, done) {
    try {

      const {data, status} = await Services.getAirports();

      if (status === HTTP_CODE_STATUS_SUCCESS) {
        dispatch(storedAirports(data));

      } else {
        console.log(data);
      }

    } catch (error) {
      console.log(error);

    }
    done();
  }
});

const StoredAirportsManager = createLogic({
  type: [STORED_AIRPORTS],

  transform({getState, action}, next) {

    const {response = {}} = action
    const {data = []} = response;

    return next({
      ...action,
      data,
    });
  }
});


const OnClickSearchManager = createLogic({
  type: [ON_CLICK_SEARCH],
  validate({getState, action}, allow, reject) {
    const {departureValue = {}, arrivalValue = {}} = action;
    if (departureValue.airport === 'Departure' || arrivalValue.airport === 'Arrival' || arrivalValue.airport === undefined || departureValue.airport === undefined) {

      reject({type: REJECT_SEARCH});
    } else {
      allow(action);
    }
  },

  process({action, getState}, dispatch, done) {
    const {departureValue = {}, arrivalValue = {}} = action;
    if (departureValue.airport === arrivalValue.airport) {
      dispatch(errorSearch('Departure and Arrival cannot be identical!!!'))
    } else {
      dispatch(getFlightsFromAtoR(departureValue.airport, arrivalValue.airport));
    }

    done();
  }

});

const ErrorSearchManager = createLogic({
  type: [ERROR_SEARCH],

  transform({getState, action}, next) {

    const {error = ''} = action
    return next({
      ...action,
      error
    });
  }
});

const GetFlightsFromAToRManager = createLogic({
  type: [GET_FLIGHTS_FROM_A_TO_R],
  async process({action, getState}, dispatch, done) {

    const {departureIATA = '', arrivalIATA = ''} = action;
    try {

      const {data, status} = await Services.getFlightsFromAToR(departureIATA, arrivalIATA);

      if (status === HTTP_CODE_STATUS_SUCCESS) {

        dispatch(storedFlightsFromAtoR(data));
      } else {
        console.log(data);
      }

    } catch (error) {
      console.log(error);

    }
    done();
  }
});


const StoredFlightsFromAtoRManager = createLogic({
  type: [STORED_FLIGHTS_FROM_A_TO_R],

  transform({getState, action}, next) {

    const {response = {}} = action
    const {data = []} = response;

    return next({
      ...action,
      data,
    });
  }
});


const GetAirlinesManager = createLogic({
  type: [GET_AIRLINES],
  async process({action, getState}, dispatch, done) {

    try {

      const {data, status} = await Services.getAirlines();

      if (status === HTTP_CODE_STATUS_SUCCESS) {
        dispatch(storedAirlines(data));

      } else {
        console.log(data);
      }

    } catch (error) {
      console.log(error);

    }
    done();
  }
});


const StoredAirlinesManager = createLogic({
  type: [STORED_AIRLINES],

  transform({getState, action}, next) {
    const {response = {}} = action
    const {data = []} = response;

    return next({
      ...action,
      data,
    });
  }
});


const GetTravelsManager = createLogic({
  type: [GET_TRAVELS],

  transform({getState, action}, next) {

    const { airportList = {}, flyerList = {}, airlines ={}} = getState().flightReducers;
    let newTravel;
    newTravel= getTravel(flyerList,airportList, airlines)

    return next({
      ...action,
      travels: newTravel,
    });
  }
});


export const FlightManagers = [
  GetAirportsManager,
  StoredAirportsManager,
  OnClickSearchManager,
  ErrorSearchManager,
  GetFlightsFromAToRManager,
  StoredFlightsFromAtoRManager,
  GetAirlinesManager,
  StoredAirlinesManager,
  GetTravelsManager
];