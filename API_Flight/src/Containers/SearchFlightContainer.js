import React from "react";
import {createSelector} from "reselect";
import {connect} from "react-redux";
import {errorSearch, getAirlines, getAirports, onClickSearch} from "../Core/Actions/FlightActions";
import SearchFlightComponent from "../Components/SearchFlightComponent";


class Flights extends React.PureComponent {

  componentDidMount() {
    this.props.getAirports();
    this.props.getAirlines();
  }


  render() {
    return <SearchFlightComponent {...this.props}/>
  }
}

const getFlightReducer = (state) => state.flightReducers;

const mapStateToProps = createSelector(
  [getFlightReducer],
  (getFlight) => {
    const {error = '', airportList = {}, flyerList = {}} = getFlight;

    return {
      airportList,
      flyerList,
      error
    };
  }
);

const mapDispatchToProps = (dispatch) => {
  return {
    getAirports: () => dispatch(getAirports()),
    onClickSearch: (departureValue, arrivalValue) => dispatch(onClickSearch(departureValue, arrivalValue)),
    errorSearch: (error) => dispatch(errorSearch(error)),
    getAirlines: () => dispatch(getAirlines()),
  };
};

const SearchFlightContainer = connect(mapStateToProps, mapDispatchToProps)(Flights);
export default SearchFlightContainer;