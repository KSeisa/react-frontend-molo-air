import { useState } from "react";

function ViewFlights(
) {
  let flights = ["MNM123", "ADF356", "JSX046", "DOF846", "WNG843", "DGC"];

  //Event Handler
  //const handleClick = (event) => console.log(event);

  //Hook - tell react thyat you have state that will chan ge eg change
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>Flights</h1>
      <ul class="list-group">
        {flights.map((flight, index) => (
          <li
            class={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={flight}
            onClick={() => setSelectedIndex(index)}
          >
            {flight}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ViewFlights;
