export const getTravel = (flyerList, airportList, airlines) => {
  let newTravel = [];

  const departureAirportId = findDepartureAirportId(flyerList, airportList);
  const arrivalAirportId = findArrivalAirportId(flyerList, airportList);
  const airlineId = findAirlineId(flyerList, airlines);
  /* eslint-disable */
  flyerList.map((flyer) => {
    newTravel.push({
      id: flyer.id,
      departureAirportId: departureAirportId.find(departure => departure.id === flyer.departureAirportId && departure.codeIata).codeIata,
      arrivalAirportId: arrivalAirportId.find(arrival => arrival.id === flyer.arrivalAirportId && arrival.codeIata).codeIata,
      airlineId: airlineId.find(airline => airline.id === flyer.airlineId && airline.name).name,
      price: flyer.price,
    });

  });

  return newTravel;
};

export const findDepartureAirportId = (flyerList, airportList) => {
  return flyerList.map(flyer => airportList.find(airport => airport.id === flyer.departureAirportId))

};

export const findArrivalAirportId = (flyerList, airportList) => {
  return flyerList.map(flyer => airportList.find(airport => airport.id === flyer.arrivalAirportId))

};

export const findAirlineId = (flyerList, airlines) => {
  return flyerList.map(flyer => airlines.find(al => al.id === flyer.airlineId));
}

export const findTotalPrice = (travels) => {
  let price = 0;
  travels.map(travel => price = price + travel.price);

  return price.toFixed(2);
}

export const findStopOvers = (travels) => {
  return travels.length === 0 ? '' : travels.length === 1
    ? `This flight has ${travels.length} stopover`
    : `This flight has ${travels.length} stopovers`;
}