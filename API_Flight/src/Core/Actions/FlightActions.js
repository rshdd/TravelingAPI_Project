import {
  ERROR_SEARCH, GET_AIRLINES,
  GET_AIRPORTS,
  GET_FLIGHTS_FROM_A_TO_R, GET_TRAVELS,
  ON_CLICK_SEARCH, STORED_AIRLINES,
  STORED_AIRPORTS, STORED_FLIGHTS_FROM_A_TO_R
} from "../Constants/FlightConstants";


export function getAirports() {
  return {
    type: GET_AIRPORTS,
  }
}

export function storedAirports(response) {
  return {
    type: STORED_AIRPORTS,
    response
  }
}

export function onClickSearch(departureValue, arrivalValue) {
  return {
    type: ON_CLICK_SEARCH,
    departureValue,
    arrivalValue
  }
}

export function errorSearch(error) {
  return {
    type: ERROR_SEARCH,
    error
  }
}

export function getFlightsFromAtoR(departureIATA, arrivalIATA) {
  return {
    type: GET_FLIGHTS_FROM_A_TO_R,
    departureIATA,
    arrivalIATA
  }
}

export function storedFlightsFromAtoR(response) {
  return {
    type: STORED_FLIGHTS_FROM_A_TO_R,
    response
  }
}

export function getAirlines() {
  return {
    type: GET_AIRLINES,
  }
}

export function storedAirlines(response) {
  return {
    type: STORED_AIRLINES,
    response
  }
}

export function getTravels() {
  return {
    type: GET_TRAVELS,
  }
}