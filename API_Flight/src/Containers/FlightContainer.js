import React from "react";
import {createSelector} from "reselect";
import {connect} from "react-redux";
import {getTravels} from "../Core/Actions/FlightActions";
import FlightTableComponent from "../Components/FlyghtTableComponent";


class Flights extends React.PureComponent {

  componentDidMount() {
    this.props.getTravels();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.flyerList !== prevProps.flyerList) {
      this.props.getTravels();
    }
  }

  render() {
    return <FlightTableComponent {...this.props}/>
  }
}

const getFlightReducer = (state) => state.flightReducers;

const mapStateToProps = createSelector(
  [getFlightReducer],
  (getFlight) => {
    const {travels = {}, flyerList={}} = getFlight;

    return {
      flyerList,
      travels
    };
  }
);

const mapDispatchToProps = (dispatch) => {
  return {
    getTravels: () => dispatch(getTravels())
  };
};

const FlightContainer = connect(mapStateToProps, mapDispatchToProps)(Flights);
export default FlightContainer;