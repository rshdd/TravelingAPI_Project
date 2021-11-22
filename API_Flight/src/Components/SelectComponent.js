import React from 'react';
import {Form} from "react-bootstrap";


const SelectComponent = ({airportList = {}, placeHolder = '', setSearch}) => {


  const selectOption = (event) => {
    event.target.value !== placeHolder && setSearch({selectType: placeHolder, airport: event.target.value});

  }

  const options = airportList.map(
    (airport) => <option key={airport.codeIata} value={airport.codeIata}>{airport.codeIata}</option>
  );

  return <>
    <Form.Control as="select" onChange={(event) => selectOption(event)}>
      <option>{placeHolder}</option>
      {options}
    </Form.Control>

  </>
}

export default SelectComponent;