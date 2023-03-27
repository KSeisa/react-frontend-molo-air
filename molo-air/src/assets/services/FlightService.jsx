import axios from 'axios';

const FLIGHTS_REST_API_URL = "http://localhost:8202/flights"

class FlightsService {

    getFlights() {
        axios.get("http://localhost:8202/flights")
        .then(response => setFlights(response.data))
        .catch(error => console.log(error))
    };
}

export default new FlightsService();