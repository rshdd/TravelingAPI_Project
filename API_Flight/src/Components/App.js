import React from 'react';
import '../Styles/App.css';
import SearchFlightContainer from "../Containers/SearchFlightContainer";
import {Container} from "react-bootstrap";
import FlightContainer from "../Containers/FlightContainer";


const App = () => {
  return <>
    <div className="App">
      <Container>
        <SearchFlightContainer/>
        <FlightContainer/>
      </Container>
    </div>
  </>
}

export default App;
