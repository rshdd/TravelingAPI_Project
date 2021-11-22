import React from 'react';
import {Alert} from "react-bootstrap";

import {findStopOvers} from "../Utils/FlightUtils";

const FlightTableDescriptionComponent = ({travels}) => {
  const showStopOvers = findStopOvers(travels)

  return <>
    {showStopOvers && <Alert variant='light'>
      <Alert.Heading>
        {showStopOvers}
      </Alert.Heading>
    </Alert>}

  </>
}

export default FlightTableDescriptionComponent;
