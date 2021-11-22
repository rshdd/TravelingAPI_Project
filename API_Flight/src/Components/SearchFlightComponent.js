import React, {useState} from 'react';
import {Button, Alert, Card, Col, Container, Row} from "react-bootstrap";
import SelectComponent from "./SelectComponent";
import DescriptionComponent from "./DescriptionComponent";


const SearchFlightComponent = ({airportList = {}, onClickSearch, error, errorSearch}) => {
  const [departureValue, setDepartureValue] = useState({});
  const [arrivalValue, setArrivalValue] = useState({});

  const setDeparture = (value) => {
    errorSearch('')
    if (value.selectType === 'Departure') {
      setDepartureValue(value);
    } else {
      setArrivalValue(value)
    }
  }


  return <>
    <Container style={{width: '30rem', marginTop: '10rem'}}>
      <Card className="justify-content-sx-center">
        <Card.Body>
          <Card.Title>Find the cheapest flight</Card.Title>
          <Row>
            <Col>
              <SelectComponent airportList={airportList} placeHolder={'Departure'} setSearch={setDeparture}/>
            </Col>
            <Col>
              <SelectComponent airportList={airportList} placeHolder={'Arrival'} setSearch={setDeparture}/>
            </Col>
          </Row>
          {error && <Alert variant={'danger'} style={{marginTop: '1rem'}}>
            {error}
          </Alert>}
        </Card.Body>
        <Button variant="secondary" onClick={() => onClickSearch(departureValue, arrivalValue)}>
          Find a flight !
        </Button>
      </Card>
      <DescriptionComponent arrivalValue={arrivalValue} departureValue={departureValue}/>
    </Container>
  </>
}

export default SearchFlightComponent;
