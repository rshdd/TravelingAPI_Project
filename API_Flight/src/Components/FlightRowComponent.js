import React from 'react';
import {findTotalPrice} from "../Utils/FlightUtils";


const FlightRowComponent = ({travels}) => {
  const totalPrice = findTotalPrice(travels)

  const flyer = travels.map(
    travel =>
      <tr key={travel.id}>
        <td>{travel.airlineId}</td>
        <td>{travel.departureAirportId}</td>
        <td>{travel.arrivalAirportId}</td>
        <td>{travel.price}</td>
      </tr>
  )

  return <>
    {flyer}
    <tr>
      <td colSpan="3">Total price</td>
      <td>{totalPrice}</td>
    </tr>
  </>
}

export default FlightRowComponent;
