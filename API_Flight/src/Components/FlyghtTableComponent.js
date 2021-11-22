import React from 'react';
import {Container, Table} from "react-bootstrap";
import FlightRowComponent from "./FlightRowComponent";
import FlightTableDescriptionComponent from "./FlightTableDescription";


const FlightTableComponent = ({travels}) => {

  return <>
    <Container style={{marginTop: '1.5rem'}}>
    <FlightTableDescriptionComponent travels={travels} />
      {travels.length > 0 && <Table striped bordered>
        <thead>
        <tr>
          <th>Airline</th>
          <th>Departure</th>
          <th>Arrival</th>
          <th>Price</th>
        </tr>
        </thead>
        <tbody>
        <FlightRowComponent travels={travels} />
        </tbody>
      </Table>}
    </Container>

  </>
}

export default FlightTableComponent;