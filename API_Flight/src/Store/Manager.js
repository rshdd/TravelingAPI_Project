import {InitManagers} from "../Core/Logic/Init/InitManagers";
import {FlightManagers} from "../Core/Logic/FlightManagers";



const managers = [
  ...InitManagers,
  ...FlightManagers,
];

export default managers;
