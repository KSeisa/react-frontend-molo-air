import axios from "axios";
import React from "react";
import logo from "../../assets/logo.svg";
import FlightService from "../../assets/services/FlightService";
;

class FlightDetailComponent extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      flights: [],
    }
  }

  componentDidMount() {
        axios.get("http://localhost:8202/flights")
        .then(response => {
            const flights = response.data
            this.setState({flights})
        .catch(error => console.log(error))
        console.log(response.data);
    })
}


  render() {
    return (
      <div>
        <img src={logo} width="64" height="64"></img>
        <h1>MoloAir</h1>
        <div>
            <h2>Flights</h2>
            <table class="table">
                <thead>
                    <tr>
                        <td>Flight Number</td>
                        <td>Origin</td>
                        <td>Destination</td>
                        <td>Departure</td>
                        <td>Arrival</td>
                        <td>Seat Cost</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.flights.map(
                            flight =>
                            <tr key={flight.id}>
                                <td> {flight.flightNumber}</td>
                                <td>{flight.origin}</td>
                                <td>{flight.destination}</td>
                                <td>{flight.departureTime}</td>
                                <td>{flight.arrivalTime}</td>
                                <td>R {flight.seatCost}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
      </div>
    );
  }
}

export default FlightDetailComponent;
